import { Fixture } from '../models/lighting';

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
