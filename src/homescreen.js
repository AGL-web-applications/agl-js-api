import { call as api_call } from './api';

export function showWindow(appId) {
    return api_call("homescreen/showWindow", {
        application_id: appId, 
        parameter: {
            area: "normal.full"
        }
    });
}