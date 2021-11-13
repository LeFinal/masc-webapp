import { Component, Input } from '@angular/core';
import { CommunicationState } from '../../services/communication.service';

/**
 * Displays the {@link CommunicationState} in the header.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
@Component({
  selector: 'app-communication-state',
  templateUrl: './communication-state.component.html',
  styleUrls: ['./communication-state.component.scss'],
})
export class CommunicationStateComponent {
  communicationState = CommunicationState;
  @Input() state?: CommunicationState;
}
