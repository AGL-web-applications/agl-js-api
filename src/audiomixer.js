import { call as api_call } from './api';

export function list_controls() {
    return api_call("audiomixer/list_controls", {});
}

export function set_volume(control, value) {
    return api_call("audiomixer/volume", {
                control: control,
                value: value
            });
}