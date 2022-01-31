/**
 * Type with associated functionality by {@link LightSwitch}.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
export enum LightSwitchType {
  /**
   * A light switch that toggles the enabled state by sending high/low states.
   */
  HiLo = 'hi-lo',
}

/**
 * Provided functionality by a {@link LightSwitch}.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
export enum LightSwitchFeature {}

/**
 * A switch that controls fixtures.
 */
export interface LightSwitch {
  /**
   * Identifies the light switch.
   */
  id: number;
  /**
   * The associated device.
   */
  device_id: string;
  /**
   * The optional human-readable name of the associated device.
   */
  device_name?: string;
  /**
   * How the device identifies the light switch.
   */
  provider_id: string;
  /**
   * The type which describes its functionality and features.
   */
  type: LightSwitchType;
  /**
   * Optionally set human-readable name.
   */
  name?: string;
  /**
   * Provided features.
   */
  features: LightSwitchFeature[];
  /**
   * Whether the light switch is currently connected.
   */
  is_online: boolean;
  /**
   * The last time the light switch updated its online-state.
   */
  last_seen: Date;
  /**
   * Assigned fixtures that are controlled by this light switch.
   */
  assignments: number[];
}

/**
 * Returns a human-readable {@link LightSwitchType} name.
 *
 * @param t The light switch type to get the name for.
 */
export function getLightSwitchName(t: LightSwitchType): string {
  switch (t) {
    case LightSwitchType.HiLo:
      return 'HiLo';
  }
}
