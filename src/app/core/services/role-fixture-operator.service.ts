import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FixtureState } from '../models/lighting';
import { CommunicationService } from './communication.service';
import { RoleType } from '../models/acting';
import { MessageType } from '../messages/container';
import {
  FixtureEnabledState,
  FixtureLocatingMode,
  MessageFixtureStates,
  MessageSetFixturesEnabled,
  MessageSetFixturesLocating,
} from '../messages/lighting';
import { RoleService } from './role-service';

/**
 * Service for all stuff regarding {@link RoleType.FixtureOperator}.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
@Injectable({
  providedIn: 'root',
})
export class RoleFixtureOperatorService extends RoleService {

  private fixtureStates = new BehaviorSubject<FixtureState[]>([]);

  constructor(communicationService: CommunicationService) {
    super(RoleType.FixtureOperator, communicationService);
    super.getMessages().subscribe(m => {
      if (m.message_type === MessageType.FixtureStates) {
        const messageFixtureStates = m.content as MessageFixtureStates;
        this.fixtureStates.next(messageFixtureStates.fixtures);
      }
    });
  }

  /**
   * Returns an observable for when new fixture states are received as a result of {@link requestFixtureStates}.
   */
  getFixtureStates(): Observable<FixtureState[]> {
    return this.fixtureStates.asObservable();
  }

  /**
   * Requests current fixture states that will be returned via {@link getFixtureStates}.
   */
  requestFixtureStates(): void {
    super.sendMessage(MessageType.GetFixtureStates);
  }

  /**
   * Sets the enabled-state for the given fixtures.
   * @param states The enabled-states with their fixture identifiers.
   */
  setFixtureEnabled(states: FixtureEnabledState[]): void {
    const mc: MessageSetFixturesEnabled = {
      fixtures: states,
    };
    super.sendMessage(MessageType.SetFixturesEnabled, mc);
  }

  /**
   * Sets the locating-mode for the given fixtures.
   * @param modes The locating-modes with their fixture identifiers.
   */
  setFixtureLocating(modes: FixtureLocatingMode[]): void {
    const mc: MessageSetFixturesLocating = {
      fixtures: modes,
    };
    super.sendMessage(MessageType.SetFixturesLocating, mc);
  }
}
