import { call as api_call } from './api';

export function runnables() {
    return api_call("afm-main/runnables", {});
}

export function start(appId) {
    return api_call("afm-main/start", {
                id: appId
            }).then(function(result) {
                return api_call("homescreen/showWindow", {
                    application_id: appId.split('@')[0], 
                    parameter: {
                        area: "normal.full"
                    }
                });
            });
}