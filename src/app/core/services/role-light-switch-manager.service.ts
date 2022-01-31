import { Injectable } from '@angular/core';
import { CommunicationService } from './communication.service';
import { RoleService } from './role-service';
import { RoleType } from '../models/acting';
import { BehaviorSubject, Observable } from 'rxjs';
import { LightSwitch } from '../models/light-switches';
import { MessageType } from '../messages/container';
import { MessageDeleteLightSwitch, MessageLightSwitchList, MessageUpdateLightSwitch } from '../messages/light-switches';
import { Fixture } from '../models/lighting';
import { MessageFixtureList } from '../messages/lighting';

/**
 * Service for all stuff regarding {@link RoleType.LightSwitchManager}.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
@Injectable({
  providedIn: 'root',
})
export class RoleLightSwitchManagerService extends RoleService {

  private fixtureList = new BehaviorSubject<Fixture[] | undefined>(undefined);
  private lightSwitchList = new BehaviorSubject<LightSwitch[] | undefined>(undefined);

  constructor(communicationService: CommunicationService) {
    super(RoleType.LightSwitchManager, communicationService);
    super.getMessages().subscribe(m => {
      switch (m.message_type) {
        case MessageType.LightSwitchList:
          const messageLightSwitchList = m.content as MessageLightSwitchList;
          this.lightSwitchList.next(messageLightSwitchList.light_switches);
          break;
        case MessageType.FixtureList:
          const messageFixtureList = m.content as MessageFixtureList;
          this.fixtureList.next(messageFixtureList.fixtures);
          break;
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
   * Returns an observable for when a new light switch list is received as a result of {@link requestLightSwitches}.
   */
  getLightSwitchList(): Observable<LightSwitch[] | undefined> {
    return this.lightSwitchList.asObservable();
  }

  /**
   * Requests new light switches that will be returned via {@link getLightSwitchList}.
   */
  requestLightSwitches(): void {
    super.sendMessage(MessageType.GetLightSwitches);
  }

  /**
   * Deletes the light switch with the given id. Remember that you can only delete light switches, that are offline!
   *
   * @param id The id of the light switch to delete.
   */
  deleteLightSwitchByID(id: number): void {
    const mc: MessageDeleteLightSwitch = {
      light_switch_id: id,
    };
    super.sendMessage(MessageType.DeleteLightSwitch, mc);
  }

  /**
   * Updates the light switch with the given id.
   *
   * @param id The id of the light switch to update.
   * @param name The new name.
   * @param assignments The new assignments.
   */
  updateLightSwitchByID(id: number, name: string | undefined, assignments: number[]): void {
    const mc: MessageUpdateLightSwitch = {
      light_switch_id: id,
      name,
      assignments,
    };
    super.sendMessage(MessageType.UpdateLightSwitch, mc);
  }
}
