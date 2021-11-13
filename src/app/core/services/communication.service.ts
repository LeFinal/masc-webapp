import { Injectable } from '@angular/core';
import { ConnectionService, ConnectionState } from './connection.service';
import { MessageContainer, MessageType } from '../messages/container';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { TokenDeviceID, TokenRoles, TokenService } from './token.service';
import { MessageHello } from '../messages/authentication';

export enum CommunicationState {
  Connecting,
  Reconnecting,
  Authenticating,
  Connected,
  Disconnected
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

  private messages$ = new ReplaySubject<MessageContainer<object>>();
  private communicationState = new BehaviorSubject<CommunicationState>(CommunicationState.Disconnected);

  constructor(private connectionService: ConnectionService, private tokenService: TokenService) {
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

  private handleMessage(message: MessageContainer<object>): void {
    switch (message.message_type) {
      case MessageType.Welcome:
        if (!message.device_id) {
          console.error('no device id received');
          return;
        }
        this.tokenService.setItem(TokenDeviceID, message.device_id);
        this.communicationState.next(CommunicationState.Connected);
        console.log(`authenticated with device id ${ message.device_id }`);
        break;
      case MessageType.Error:
        console.error(message);
        break;
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
      console.error('no roles set');
    }
    return []; // TODO;
  }
}
