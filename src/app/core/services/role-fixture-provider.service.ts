import { Injectable } from '@angular/core';
import { RoleService } from './role-service';
import { CommunicationService } from './communication.service';
import { RoleType } from '../models/acting';
import { FixtureType, OfferedFixture } from '../models/lighting';
import { MessageType } from '../messages/container';
import { MessageFixtureOffers } from '../messages/lighting';
import { Observable, ReplaySubject } from 'rxjs';

export interface FixtureProviderFixtureState {
  fixtureType: FixtureType;
  messageContent?: object;
}

/**
 * Service for all stuff regarding {@link RoleType.FixtureProvider}.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
@Injectable({
  providedIn: 'root',
})
export class RoleFixtureProviderService extends RoleService {

  /**
   * The offered fixture for testing.
   */
  offeredFixtures: OfferedFixture[] = [
    {
      id: 'test-basic-1',
      type: FixtureType.Basic,
    },
    {
      id: 'test-basic-2',
      type: FixtureType.Basic,
    },
    {
      id: 'test-dimmer-1',
      type: FixtureType.Dimmer,
    },
  ];

  private fixtureStates$ = new ReplaySubject<FixtureProviderFixtureState>();

  constructor(communicationService: CommunicationService) {
    super(RoleType.FixtureProvider, communicationService);
    // Subscribe to fixture offer requests.
    super.getMessages().subscribe(m => {
      switch (m.message_type) {
        case MessageType.FixtureBasicState:
          this.fixtureStates$.next({ fixtureType: FixtureType.Basic, messageContent: m.content });
          break;
        case MessageType.FixtureDimmerState:
          this.fixtureStates$.next({ fixtureType: FixtureType.Dimmer, messageContent: m.content });
          break;
        case MessageType.GetFixtureOffers:
          const deviceID = communicationService.getDeviceID();
          if (!deviceID) {
            console.error('device id not set although needed for providing fixture offers');
            return;
          }
          const mc: MessageFixtureOffers = {
            device_id: deviceID,
            fixtures: this.offeredFixtures,
          };
          super.sendMessage(MessageType.FixtureOffers, mc);
      }
    });
  }

  getFixtureStates(): Observable<FixtureProviderFixtureState> {
    return this.fixtureStates$.asObservable();
  }
}
