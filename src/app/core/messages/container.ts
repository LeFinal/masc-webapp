export enum MessageType {
  AbortMatch = 'abort-match',
  /**
   * Used for setting the name of a Device.
   */
  SetDeviceName = 'set-device-name',
  /**
   * AreYouReady is used for requesting ready-state from actors. Actors
   * can send messages with ReadyState for notifying of their current
   * ready-state. Ready request is finished with ReadyAccepted.
   */
  AreYouReady = 'are-you-ready',
  /**
   * DeviceList is used with MessageDeviceList as an answer to
   * GetDevices.
   */
  DeviceList = 'device-list',
  /**
   * Error is used for error messages. The content is being set to the
   * detailed error.
   */
  Error = 'error',
  /**
   * Fired is used when an actor is fired.
   */
  Fired = 'fired',
  /**
   * Fixtures provides all available fixtures from a fixture provider.
   * Used with MessageFixtures.
   */
  Fixtures = 'fixtures',
  /**
   * GetDevices is received when devices are requested.
   */
  GetDevices = 'get-devices',
  /**
   * GetFixtures is sent to the client for requesting all available
   * fixtures he offers.
   */
  GetFixtures = 'get-fixtures',
  /**
   * Hello is received with MessageHello for saying hello to the
   * server.
   */
  Hello = 'hello',
  /**
   * MatchStatus is a container for status information regarding a
   * Match.
   */
  MatchStatus = 'match-status',
  /**
   * OK is used only for confirmation of actions that do not require a
   * detailed response.
   */
  OK = 'ok',
  /**
   * PlayerJoin is used for joining a player for a match.
   */
  PlayerJoin = 'player-join',
  /**
   * PlayerJoinClosed is used for notifying that no more player can
   * join a match.
   */
  PlayerJoinClosed = 'player-join-closed',
  /**
   * PlayerJoinOpen notifies that players can now join.
   */
  PlayerJoinOpen = 'player-join-open',
  /**
   * PlayerJoined is sent to everyone participating in a match when a
   * player joined.
   */
  PlayerJoined = 'player-joined',
  /**
   * PlayerLeave is received when a player wants so leave a match.
   */
  PlayerLeave = 'player-leave',
  /**
   * PlayerLeft is sent to everyone participating in a match when a
   * player left.
   */
  PlayerLeft = 'player-left',
  /**
   * ReadyAccepted is used for ending ready-state requests that were
   * initially started with AreYouReady.
   */
  ReadyAccepted = 'ready-accepted',
  /**
   * ReadyState is used with MessageReadyState for notifying that an
   * actor is (not) ready.
   */
  ReadyState = 'ready-state',
  /**
   * ReadyStateUpdate is used with MessageReadyStateUpdate for
   * broadcasting ready-states to all actors participating in a match.
   */
  ReadyStateUpdate = 'ready-state-update',
  /**
   * RequestRoleAssignments is used with MessageRequestRoleAssignments
   * for requesting role assignments. Usually, this is sent to a game master. Used
   * with MessageRequestRoleAssignments.
   */
  RequestRoleAssignments = 'request-role-assignments',
  /**
   * RoleAssignments is used with MessageRoleAssignments for when an
   * assignment request was fulfilled.
   */
  RoleAssignments = 'role-assignments',
  /**
   * FixtureBasicSetState is used for setting the state of
   * FixtureTypeBasic.
   */
  FixtureBasicSetState = 'fixture-basic-set-state',
  /**
   * FixtureDimmerSetState is used for setting the state of
   * FixtureTypeDimmer.
   */
  FixtureDimmerSetState = 'fixture-dimmer-set-state',
  /**
   * Welcome is sent to the client when he is welcomed at the server.
   * Used with MessageWelcome.
   */
  Welcome = 'welcome',
  /**
   * YouAreIn is used with MessageYouAreIn for notifying an actor that
   * he now has a job.
   */
  YouAreIn = 'you-are-in',
}

/**
 * Container for all messages that are sent and received.
 */
export interface MessageContainer<T> {
  /**
   * Type of the message.
   */
  message_type: MessageType;
  /**
   * Optional device id that is used in order to identify a device.
   */
  device_id?: string;
  /**
   * Optional actor id for concurrent communication with actors that use the same device.
   */
  actor_id?: string;
  /**
   * The actual message content.
   */
  content?: T;
}
