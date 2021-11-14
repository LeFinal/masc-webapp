import { Injectable } from '@angular/core';
import { CommunicationService } from './communication.service';
import { RoleService } from './role-service';
import { RoleType } from '../models/acting';
import { BehaviorSubject, Observable } from 'rxjs';
import { Device } from '../models/devices';
import { MessageType } from '../messages/container';
import { MessageDeleteDevice, MessageDeviceList, MessageSetDeviceName } from '../messages/devices';

/**
 * Service for all stuff regarding {@link RoleType.DeviceManager}.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
@Injectable({
  providedIn: 'root',
})
export class RoleDeviceManagerService extends RoleService {

  private deviceList$ = new BehaviorSubject<Device[] | undefined>(undefined);

  constructor(communicationService: CommunicationService) {
    super(RoleType.DeviceManager, communicationService);
    super.getMessages().subscribe(m => {
      if (m.message_type === MessageType.DeviceList) {
        const messageDeviceList = m.content as MessageDeviceList;
        this.deviceList$.next(messageDeviceList.devices);
      }
    });
  }

  /**
   * Returns an observable for when a new device list is received as a result of {@link requestDeviceList}.
   */
  getDeviceList(): Observable<Device[] | undefined> {
    return this.deviceList$.asObservable();
  }

  /**
   * Requests new devices that will be returned via {@link getDeviceList}.
   */
  requestDeviceList(): void {
    super.sendMessage(MessageType.GetDevices);
  }

  /**
   * Deletes the device with the given id.
   * @param deviceId The id of the device to delete.
   */
  deleteDevice(deviceId: string): void {
    const mc: MessageDeleteDevice = {
      device_id: deviceId,
    };
    super.sendMessage(MessageType.DeleteDevice, mc);
  }

  /**
   * Sets the name for the given device.
   * @param deviceId The id of the device.
   * @param name The new name.
   */
  setDeviceName(deviceId: string, name: string): void {
    const mc: MessageSetDeviceName = {
      device_id: deviceId,
      name,
    };
    super.sendMessage(MessageType.SetDeviceName, mc);
  }
}
