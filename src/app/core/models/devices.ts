/**
 * A device is connected to MASC and provides roles.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
export interface Device {
  /**
   * Device identity.
   */
  id: string;
  /**
   * Optionally set name.
   */
  name?: string;
  /**
   * How the device describes itself.
   */
  self_description: string;
  /**
   * The last time, the device updated its online-state.
   */
  last_seen: Date;
  /**
   * Whether the device is currently connected.
   */
  is_connected: boolean;
  /**
   * When online, what roles the device offers.
   */
  roles?: string[];
}
