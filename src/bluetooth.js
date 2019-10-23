import { call as api_call, subscribe as api_subscribe } from './api';

export function adapter_state(oOptions) {
    return api_call("Bluetooth-Manager/adapter_state", oOptions ? oOptions : {});
}

export function managed_objects() {
    return api_call("Bluetooth-Manager/managed_objects", {});
}

export function on_device_changes(handler) {
    return api_subscribe("Bluetooth-Manager/subscribe", {
        value: "device_changes"
    }, handler);
}