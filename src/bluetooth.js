import { call as api_call, subscribe as api_subscribe } from './api';

export function adapter_state(oOptions) {
    return api_call("Bluetooth-Manager/adapter_state", oOptions ? oOptions : {});
}

export function managed_objects() {
    return api_call("Bluetooth-Manager/managed_objects", {});
}

export function pair(device) {
    return api_call("Bluetooth-Manager/pair", {
        'device': device
    });
}

export function cancel_pairing() {
    return api_call("Bluetooth-Manager/cancel_pairing", {});
}

export function confirm_pairing(pincode) {
    return api_call("Bluetooth-Manager/confirm_pairing", {
        'pincode': pincode
    });
}

export function remove_device(device) {
    return api_call("Bluetooth-Manager/remove_device", {
        'device': device
    });
}

export function connect(device) {
    return api_call("Bluetooth-Manager/connect", {
        'device': device
    });
}

export function disconnect(device) {
    return api_call("Bluetooth-Manager/disconnect", {
        'device': device
    });
}

export function on_device_changes(handler) {
    return api_subscribe("Bluetooth-Manager/subscribe", {
        value: "device_changes"
    }, handler);
}