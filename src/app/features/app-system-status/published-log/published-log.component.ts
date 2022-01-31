import { AfterViewInit, Component, ElementRef, EventEmitter, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { LogEntriesToKeep, RoleLogMonitorService } from '../../../core/services/role-log-monitor.service';
import { PublishedLogEntry } from '../../../core/models/log-publish';
import { SubscriptionComponent } from '../../../core/components/subscription-component';

/**
 * Shows published log entries from the {@link RoleLogMonitorService}.
 *
 * @author Lennart Altenhof
 */
@Component({
  selector: 'app-published-log',
  templateUrl: './published-log.component.html',
  styleUrls: ['./published-log.component.scss'],
})
export class PublishedLogComponent extends SubscriptionComponent implements AfterViewInit {

  @ViewChild('scrollFrame', { static: false }) scrollFrame?: ElementRef;
  @ViewChildren('logEntryView') logEntryViews?: QueryList<any>;
  /**
   * The log entries to display.
   */
  logEntries: PublishedLogEntry[] = [];
  /**
   * Emits when autoscroll is enabled/disabled.
   */
  @Output() autoscrollEnable = new EventEmitter<boolean>();
  private isAutoscrollEnabled = true;
  private scrollContainer: any;

  constructor(logMonitorService: RoleLogMonitorService) {
    super();
    super.pushS(logMonitorService.getLogEntries().subscribe(entry => {
      this.logEntries.push(entry);
      // Check if more than we want to keep.
      if (this.logEntries.length > LogEntriesToKeep) {
        // Remove oldest entry.
        this.logEntries.shift();
      }
    }));
  }

  ngAfterViewInit(): void {
    if (this.scrollFrame && this.logEntryViews) {
      this.scrollContainer = this.scrollFrame.nativeElement;
      this.logEntryViews.changes.subscribe(_ => this.onItemElementsChanged());
    }
  }

  scrollFrameScroll(event: any): void {
    this.setAutoscrollEnabled(this.isAutoscrollWanted());
  }

  private setAutoscrollEnabled(isEnabled: boolean): void {
    this.isAutoscrollEnabled = isEnabled;
    this.autoscrollEnable.next(isEnabled);
  }

  private onItemElementsChanged(): void {
    if (this.isAutoscrollEnabled) {
      this.scrollToBottom();
    }
  }

  private scrollToBottom(): void {
    this.scrollContainer.scroll({
      top: this.scrollContainer.scrollHeight,
      left: 0,
      behavior: 'instant',
    });
  }

  private isAutoscrollWanted(): boolean {
    const threshold = 150;
    const position = this.scrollContainer.scrollTop + this.scrollContainer.offsetHeight;
    const height = this.scrollContainer.scrollHeight;
    return position > height - threshold;
  }
}
