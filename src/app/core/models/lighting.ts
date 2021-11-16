/**
 * Type with associated functionality by {@link Fixture}.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
import { RoleType } from './acting';

export enum FixtureType {
  /**
   * For fixtures that provide only capabilities of being turned on and off as well as locating mode.
   */
  Basic = 'basic',
  /**
   * Added dimmer functionality to {@link Basic}.
   */
  Dimmer = 'dimmer'
}

/**
 * Provided functionality by a {@link Fixture}.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
export enum FixtureFeature {
  /**
   * Allows setting the brightness.
   *
   * Used by {@link FixtureType.Dimmer}.
   */
  Dimmer = 'dimmer'
}

/**
 * A lamp or light that is managed by {@link RoleType.FixtureManager} and operated by {@link RoleType.FixtureOperator}.
 */
export interface Fixture {
  /**
   * Identifies the fixture.
   */
  id: number;
  /**
   * The associated device.
   */
  device_id: string;
  /**
   * How the device identifies the fixture.
   */
  provider_id: string;
  /**
   * Whether the fixture is currently turned on.
   */
  is_enabled: boolean;
  /**
   * The type which describes its functionality and features.
   */
  type: FixtureType;
  /**
   * Optionally set human-readable name.
   */
  name?: string;
  /**
   * Provided features.
   */
  features: FixtureFeature[];
  /**
   * Whether the fixture is currently in locating-mode. This is only set when online.
   */
  is_locating?: boolean;
  /**
   * Whether the fixture is currently connected.
   */
  is_online: boolean;
  /**
   * The last time the fixture updated its online-state.
   */
  last_seen: Date;
}

/**
 * Returns {@link FixtureType} by the given string.
 * @param typeStr The textual representation.
 */
export function getFixtureTypeByStr(typeStr: string): FixtureType {
  switch (typeStr) {
    case FixtureType.Basic:
      return FixtureType.Basic;
    case FixtureType.Dimmer:
      return FixtureType.Dimmer;
    default:
      console.error(`unknown fixture type: ${ typeStr }`);
      return FixtureType.Basic;
  }
}

/**
 * Returns a {@link FixtureFeature} by the given string.
 * @param featStr The textual representation.
 */
export function getFixtureFeatureByStr(featStr: string): FixtureFeature {
  switch (featStr) {
    case FixtureFeature.Dimmer:
      return FixtureFeature.Dimmer;
    default:
      console.error(`unknown fixture feature: ${ featStr }`);
      return FixtureFeature.Dimmer;
  }
}


/**
 * Returns a human-readable {@link FixtureType} name.
 * @param ft The fixture type to get a name for.
 */
export function getFixtureTypeName(ft: FixtureType): string {
  switch (ft) {
    case FixtureType.Basic:
      return 'Basic';
    case FixtureType.Dimmer:
      return 'Dimmer';
  }
}

/**
 * Fixture offer used with {@link MessageOfferedFixtures}.
 *
 * @version 1.0
 */
export interface OfferedFixture {
  /**
   * The provider id.
   */
  id: string;
  /**
   * The fixture type.
   */
  type: FixtureType;
}
