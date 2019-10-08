import { call as api_call, subscribe as api_subscribe } from './api';

export function adapter_state() {
    return api_call("Bluetooth-Manager/adapter_state", {});
}

export function on_device_changes(handler) {
    return api_subscribe("Bluetooth-Manager/subscribe", {
        value: "device_changes"
    }, handler);
}