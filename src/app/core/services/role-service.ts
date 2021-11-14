import { CommunicationService } from './communication.service';
import { RoleType } from '../models/acting';
import { MessageContainer, MessageType } from '../messages/container';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

/**
 * General stuff for all role services.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
export abstract class RoleService {

  private actorId?: string;
  private messages$ = new ReplaySubject<MessageContainer<object>>();
  private hired$ = new BehaviorSubject<boolean>(false);

  protected constructor(private roleType: RoleType, private communicationService: CommunicationService) {
    this.communicationService.getJobEvents().subscribe((e) => {
      if (e.roleType !== roleType) {
        return;
      }
      if (e.hired) {
        this.actorId = e.actorId;
      } else {
        this.actorId = undefined;
      }
      this.hired$.next(e.hired);
    });
    this.communicationService.getMessages().subscribe(message => {
      if (!this.actorId || message.actor_id !== this.actorId) {
        return;
      }
      this.messages$.next(message);
    });
  }

  /**
   * Returns an observable for received actor messages.
   */
  getMessages(): Observable<MessageContainer<object>> {
    return this.messages$.asObservable();
  }

  getOK(): Observable<{}> {
    return this.messages$.asObservable().pipe(filter(m => m.message_type === MessageType.OK), map((_) => ({})));
  }

  /**
   * Returns an observable for the hired state.
   */
  getHired(): Observable<boolean> {
    return this.hired$.asObservable();
  }

  /**
   * Sends the message with the given type and content over the actor connection.
   * @param messageType The message type.
   * @param messageContent The content.
   * @protected
   */
  protected sendMessage(messageType: MessageType, messageContent?: object): void {
    if (!this.actorId) {
      console.error('cannot send message when not hired');
      return;
    }
    this.communicationService.sendMessage({
      message_type: messageType,
      actor_id: this.actorId,
      content: messageContent,
    });
  }
}
