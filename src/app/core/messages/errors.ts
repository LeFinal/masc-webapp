/**
 * Message content for {@link MessageType.Error}.
 */
export interface MessageError {
  code: string;
  kind: string;
  err: string;
  message: string;
  details: object;
}
