/**
 * Message content for {@link MessageType.Hello}.
 */
export interface MessageHello {
  /**
   * Roles the client supports.
   */
  roles: string[];
  /**
   * Human-readable description of the client.
   */
  self_description: string;
}
