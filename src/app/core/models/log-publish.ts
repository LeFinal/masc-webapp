type Field = {
  [key: string]: string
};

/**
 * Published log entry.
 */
export interface PublishedLogEntry {
  /**
   * The timestamp for the entry.
   */
  time: Date;
  /**
   * The actual message.
   */
  message: string;
  /**
   * The log level.
   */
  level: string;
  /**
   * The name of the logger.
   */
  logger_name: string;
  /**
   * Optional fields.
   */
  fields: Field;
}
