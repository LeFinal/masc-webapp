import { Component, OnDestroy } from '@angular/core';
import { CommunicationService, CommunicationState } from '../../services/communication.service';
import { Subscription } from 'rxjs';
import { TimeService } from '../../services/time.service';

/**
 * Header for home layout.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent implements OnDestroy {

  /**
   * The current communication state which is displayed in the header.
   */
  communicationState?: CommunicationState;
  /**
   * The current time.
   */
  time?: Date;

  private s: Subscription[] = [];

  constructor(communicationService: CommunicationService, timeService: TimeService) {
    this.s.push(communicationService.getCommunicationState().subscribe(s => this.communicationState = s));
    this.s.push(timeService.getTime().subscribe(time => {
      this.time = time;
    }));
  }

  ngOnDestroy(): void {
    this.s.forEach(s => s.unsubscribe());
  }
}
