import { Device } from '../models/devices';

/**
 * Message content for {@link MessageType.DeviceList}.
 */
export interface MessageDeviceList {
  devices: Device[];
}

/**
 * Message content for {@link MessageType.DeleteDevice}.
 */
export interface MessageDeleteDevice {
  device_id: string;
}

/**
 * Message content for {@link MessageType.SetDeviceName}.
 */
export interface MessageSetDeviceName {
  /**
   * The device to set the name for.
   */
  device_id: string;
  /**
   * The new name.
   */
  name: string;
}
