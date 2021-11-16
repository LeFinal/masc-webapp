import { Fixture, OfferedFixture } from '../models/lighting';

/**
 * Message content for {@link MessageType.FixtureList}.
 *
 * @version 1.0
 */
export interface MessageFixtureList {
  fixtures: Fixture[];
}

/**
 * Message content for {@link MessageType.SetFixtureName}.
 *
 * @version 1.0
 */
export interface MessageSetFixtureName {
  /**
   * The id of the fixture to set the name for.
   */
  fixture_id: number;
  /**
   * The optional name. If not set, the name is cleared.
   */
  name?: string;
}

/**
 * Message content for {@link MessageType.DeleteFixture}.
 *
 * @version 1.0
 */
export interface MessageDeleteFixture {
  /**
   * The id of the fixture to delete.
   */
  fixture_id: number;
}

/**
 * Message content for {@link MessageType.FixtureOffers}.
 *
 * @version 1.0
 */
export interface MessageFixtureOffers {
  /**
   * Our own device id. This is only used for association. Don't do bs with that!
   */
  device_id: string;
  /**
   * The offered fixtures.
   */
  fixtures: OfferedFixture[];
}

/**
 * Message content for {@link MessageType.FixtureBasicState}.
 *
 * @version 1.0
 */
export interface MessageFixtureBasicState {
  /**
   * The provider id.
   */
  fixture: string;
  /**
   * Whether the fixture is enabled or not.
   */
  is_enabled: boolean;
  /**
   * Whether the fixture is in locating-mode.
   */
  is_locating: boolean;
}

/**
 * Message content for {@link MessageType.FixtureDimmerState}.
 *
 * @version 1.0
 */
export interface MessageFixtureDimmerState extends MessageFixtureBasicState {
  /**
   * The brightness the dimmer should use.
   */
  brightness: number;
}
