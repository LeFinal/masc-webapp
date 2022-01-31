import { PublishedLogEntry } from '../models/log-publish';

/**
 * Message content for {@link MessageType.NextLogEntries}.
 */
export interface MessageNextLogEntries {
  entries: PublishedLogEntry[];
}
