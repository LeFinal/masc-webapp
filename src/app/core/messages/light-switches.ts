import { LightSwitch } from '../models/light-switches';

/**
 * Message content for {@link MessageType.LightSwitchList}.
 *
 * @version 1.0
 */
export interface MessageLightSwitchList {
  light_switches: LightSwitch[];
}

/**
 * Message content for {@link MessageType.UpdateLightSwitch}.
 *
 * @version 1.0
 */
export interface MessageUpdateLightSwitch {
  /**
   * ID of the light switch to update.
   */
  light_switch_id: number;
  /**
   * The new name.
   */
  name?: string;
  /**
   * The new assigned fixtures.
   */
  assignments: number[];
}

/**
 * Message content for {@link MessageType.DeleteLightSwitch}.
 *
 * @version 1.0
 */
export interface MessageDeleteLightSwitch {
  light_switch_id: number;
}
