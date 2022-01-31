import { Component, Input } from '@angular/core';
import { PublishedLogEntry } from '../../../core/models/log-publish';

interface Field {
  k: string;
  v?: string;
}

/**
 * Displays a {@link PublishedLogEntry}.
 *
 * @author Lennart Altenhof
 */
@Component({
  selector: 'app-published-log-entry',
  templateUrl: './published-log-entry.component.html',
  styleUrls: ['./published-log-entry.component.scss'],
})
export class PublishedLogEntryComponent {
  @Input() logEntry?: PublishedLogEntry;

  getTopicField(): Field | undefined {
    if (!this.logEntry) {
      return undefined;
    }
    const topicFieldValue = this.logEntry.fields.topic;
    if (topicFieldValue === undefined) {
      return undefined;
    }
    return {
      k: 'topic',
      v: topicFieldValue,
    };
  }

  getFieldsWithoutTopic(): Field[] {
    if (!this.logEntry) {
      return [];
    }
    return Object.keys(this.logEntry.fields)
      .filter(k => k !== 'topic')
      .map(k => ({ k, v: this.logEntry?.fields[k] }));
  }
}
