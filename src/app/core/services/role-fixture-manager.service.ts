import { Injectable } from '@angular/core';
import { RoleService } from './role-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { CommunicationService } from './communication.service';
import { RoleType } from '../models/acting';
import { MessageType } from '../messages/container';
import { Fixture } from '../models/lighting';
import { MessageDeleteFixture, MessageFixtureList, MessageSetFixtureName } from '../messages/lighting';

/**
 * Service for all stuff regarding {@link RoleType.FixtureManager}.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
@Injectable({
  providedIn: 'root',
})
export class RoleFixtureManagerService extends RoleService {

  private fixtureList = new BehaviorSubject<Fixture[] | undefined>(undefined);

  constructor(communicationService: CommunicationService) {
    super(RoleType.FixtureManager, communicationService);
    super.getMessages().subscribe(m => {
      if (m.message_type === MessageType.FixtureList) {
        const messageFixtureList = m.content as MessageFixtureList;
        this.fixtureList.next(messageFixtureList.fixtures);
      }
    });
  }

  /**
   * Returns an observable for when a new fixture list is received as a result of {@link requestFixtureList}.
   */
  getFixtureList(): Observable<Fixture[] | undefined> {
    return this.fixtureList.asObservable();
  }

  /**
   * Requests new fixtures that will be returned via {@link getFixtureList}.
   */
  requestFixtureList(): void {
    super.sendMessage(MessageType.GetFixtures);
  }

  /**
   * Deletes the fixture with the given id.
   * @param fixtureId The id of the fixture to delete.
   */
  deleteFixture(fixtureId: number): void {
    const mc: MessageDeleteFixture = {
      fixture_id: fixtureId,
    };
    super.sendMessage(MessageType.DeleteFixture, mc);
  }

  /**
   * Sets the name for the given fixture.
   * @param fixtureId The id of the fixture.
   * @param name The new name.
   */
  setFixtureName(fixtureId: number, name: string): void {
    const mc: MessageSetFixtureName = {
      fixture_id: fixtureId,
      name,
    };
    super.sendMessage(MessageType.SetFixtureName, mc);
  }
}
