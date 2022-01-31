import { Injectable } from '@angular/core';
import { RoleService } from './role-service';
import { CommunicationService } from './communication.service';
import { RoleType } from '../models/acting';
import { MessageType } from '../messages/container';
import { Observable, ReplaySubject } from 'rxjs';
import { PublishedLogEntry } from '../models/log-publish';
import { MessageNextLogEntries } from '../messages/log-publish';

/**
 * How many log entries to keep/display.
 */
export const LogEntriesToKeep = 256;

/**
 * Service for all stuff regarding {@link RoleType.LogMonitor}.
 *
 * @author Lennart Altenhof
 */
@Injectable({
  providedIn: 'root',
})
export class RoleLogMonitorService extends RoleService {

  private nextLogEntries = new ReplaySubject<PublishedLogEntry>(LogEntriesToKeep);

  constructor(communicationService: CommunicationService) {
    super(RoleType.LogMonitor, communicationService);
    super.getMessages().subscribe(m => {
      if (m.message_type !== MessageType.NextLogEntries) {
        return;
      }
      // Publish.
      const messageNextLogEntries = m.content as MessageNextLogEntries;
      messageNextLogEntries.entries.forEach(entry => this.nextLogEntries.next(entry));
    });
  }

  /**
   * Returns an observable for log entries.
   */
  getLogEntries(): Observable<PublishedLogEntry> {
    return this.nextLogEntries.asObservable();
  }
}
