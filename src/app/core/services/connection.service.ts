import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { MessageContainer } from '../messages/container';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, NextObserver, Observable, ReplaySubject } from 'rxjs';

export enum ConnectionState {
  Connecting,
  Reconnecting,
  Connected,
  Disconnected
}

/**
 * Service for connecting to MASC.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
@Injectable({
  providedIn: 'root',
})
export class ConnectionService {

  /**
   * The actual websocket connection.
   * @private
   */
  private ws: WebSocketSubject<MessageContainer<object>>;
  private messages$ = new ReplaySubject<MessageContainer<object>>();
  private connectionState$ = new BehaviorSubject<ConnectionState>(ConnectionState.Disconnected);

  constructor() {
    this.ws = this.connect(environment.serverURL);
  }

  /**
   * Returns an observable for the {@link ConnectionState} for the server connection.
   */
  getConnectionState(): Observable<ConnectionState> {
    return this.connectionState$;
  }

  /**
   * Return an observable for all received messages.
   */
  getMessages(): Observable<MessageContainer<object>> {
    return this.messages$.asObservable();
  }

  /**
   * Sends the given message.
   * @param message The message to send.
   */
  sendMessage(message: MessageContainer<object>): void {
    this.ws.next(message);
  }

  /**
   * Creates the open observer for pushing the new connected state to {@link connectionState$}.
   * @private
   */
  private getOpenObserver(): NextObserver<any> {
    return {
      next: (_) => {
        console.log('connected');
        this.connectionState$.next(ConnectionState.Connected);
      },
    };
  }

  private connect(url: string): WebSocketSubject<MessageContainer<object>> {
    console.log(`connecting to ${ url }...`);
    this.connectionState$.next(ConnectionState.Connecting);
    const ws = webSocket<MessageContainer<object>>({
      url,
      openObserver: this.getOpenObserver(),
    });
    ws.subscribe(
      msg => {
        this.messages$.next(msg);
      },
      err => {
        this.connectionState$.next(ConnectionState.Disconnected);
        console.error(err);
      },
      () => {
        this.connectionState$.next(ConnectionState.Disconnected);
        console.error('connection closed');
      },
    );
    return ws;
  }
}
