import { Injectable } from '@angular/core';
import { ConnectionService, ConnectionState } from './connection.service';
import { MessageContainer, MessageType } from '../messages/container';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { TokenDeviceID, TokenRoles, TokenService } from './token.service';
import { MessageHello } from '../messages/authentication';
import { getRoleByStr, RoleType } from '../models/acting';
import { MessageYouAreIn } from '../messages/acting';
import { MessageError } from '../messages/errors';

export enum CommunicationState {
  Connecting,
  Reconnecting,
  Authenticating,
  Connected,
  Disconnected
}

/**
 * Events used by job events from {@link CommunicationService}.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
export interface JobEvent {
  /**
   * The actor id the job event is for.
   */
  actorId: string;
  /**
   * The role the job event is for when hired.
   */
  roleType?: RoleType;
  /**
   * Whether the job is now active (hired) or inactive (fired).
   */
  hired: boolean;
}

export interface ErrorEvent {
  code: string;
  error: string;
  message: string;
  details: object;
}

/**
 * Handles authentication for communication with MASC.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
@Injectable({
  providedIn: 'root',
})
export class CommunicationService {

  private deviceId?: string;

  private messages$ = new ReplaySubject<MessageContainer<object>>();
  private communicationState = new BehaviorSubject<CommunicationState>(CommunicationState.Disconnected);
  private jobEvents$ = new ReplaySubject<JobEvent>();
  private errors$ = new ReplaySubject<ErrorEvent>();

  constructor(private connectionService: ConnectionService, private tokenService: TokenService) {
    this.deviceId = tokenService.getItem(TokenDeviceID);
    connectionService.getConnectionState().subscribe(s => this.handleConnectionStateChange(s));
    connectionService.getMessages().subscribe(m => this.handleMessage(m));
  }

  /**
   * Returns an observable for the {@link CommunicationState} for the server connection.
   */
  getCommunicationState(): Observable<CommunicationState> {
    return this.communicationState;
  }

  /**
   * Return an observable for all received messages.
   */
  getMessages(): Observable<MessageContainer<object>> {
    return this.messages$.asObservable();
  }

  /**
   * Returns an observable for all received errors.
   */
  getErrors(): Observable<ErrorEvent> {
    return this.errors$.asObservable();
  }

  /**
   * Returns an observable for {@link JobEvent}s.
   */
  getJobEvents(): Observable<JobEvent> {
    return this.jobEvents$.asObservable();
  }

  /**
   * Sends the given message over the connection.
   * @param message The message to send.
   */
  sendMessage(message: MessageContainer<object>): void {
    if (!this.deviceId) {
      console.error('cannot send message with device id not being set');
      return;
    }
    this.connectionService.sendMessage({
      device_id: this.deviceId,
      ...message,
    });
  }

  /**
   * Returns the assigned/saved device id.
   */
  getDeviceID(): string | undefined {
    return this.deviceId;
  }

  private handleMessage(message: MessageContainer<object>): void {
    switch (message.message_type) {
      case MessageType.Welcome:
        if (!message.device_id) {
          console.error('no device id received');
          return;
        }
        this.deviceId = message.device_id;
        this.tokenService.setItem(TokenDeviceID, this.deviceId);
        this.communicationState.next(CommunicationState.Connected);
        console.log(`authenticated with device id ${ message.device_id }`);
        break;
      case MessageType.YouAreIn:
        const messageYouAreIn: MessageYouAreIn = message.content as MessageYouAreIn;
        this.jobEvents$.next({
          actorId: messageYouAreIn.actor_id,
          roleType: getRoleByStr(messageYouAreIn.role),
          hired: true,
        });
        break;
      case MessageType.Fired:
        if (!message.actor_id) {
          console.error('got fired message without actor id');
          break;
        }
        this.jobEvents$.next({
          actorId: message.actor_id,
          hired: false,
        });
        break;
      case MessageType.Error:
        const messageError: MessageError = message.content as MessageError;
        console.error(message);
        this.errors$.next({
          code: messageError.code,
          error: messageError.err,
          message: messageError.message,
          details: messageError.details,
        });
        break;
      default:
        this.messages$.next(message);
    }
  }

  private handleConnectionStateChange(state: ConnectionState): void {
    switch (state) {
      case ConnectionState.Connecting:
        this.communicationState.next(CommunicationState.Connecting);
        break;
      case ConnectionState.Reconnecting:
        console.error('reconnecting currently not supported');
        break;
      case ConnectionState.Connected:
        this.communicationState.next(CommunicationState.Authenticating);
        this.authenticate();
        break;
      case ConnectionState.Disconnected:
        this.communicationState.next(CommunicationState.Disconnected);
        break;
    }
  }

  /**
   * Authenticate the client with MASC using {@link MessageType.Hello}.
   * @private
   */
  private authenticate(): void {
    const deviceId = this.tokenService.getItem(TokenDeviceID);
    console.log(`authenticating with device id ${ deviceId }...`);
    const message: MessageContainer<MessageHello> = {
      message_type: MessageType.Hello,
      device_id: deviceId,
      content: {
        roles: this.tokenService.getItem(TokenRoles)?.split(',') ?? [],
        self_description: 'web client',
      },
    };
    this.connectionService.sendMessage(message);
  }

  private getRoles(): string[] {
    const rolesStr = this.tokenService.getItem(TokenRoles);
    // Check if roles set.
    if (!rolesStr) {
      console.warn('no roles set');
    }
    return []; // TODO: Navigate to set-roles?
  }
}
