import './AFB.js';
import * as audiomixer from './audiomixer';
import * as afmMain from './afm-main';
import * as api from './api';

api.init();

export {
    audiomixer,
    afmMain,
    api
}