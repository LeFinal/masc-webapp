/**
 * Message content for {@link MessageType.Error}.
 *
 * @version 2.0
 */
export interface MessageError {
  code: string;
  err: string;
  message: string;
  details: object;
}
