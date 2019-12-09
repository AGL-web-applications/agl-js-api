import './AFB.js';
import * as audiomixer from './audiomixer';
import * as afmMain from './afm-main';
import * as weather from './weather';
import * as bluetooth from './bluetooth';
import * as network from './network';
import * as homescreen from './homescreen';
import * as lowcan from './low-can';
import * as mediaplayer from './mediaplayer';
import * as api from './api';

api.init();

export {
    audiomixer,
    afmMain,
    weather,
    bluetooth,
    network,
    homescreen,
    lowcan,
    mediaplayer,
    api
}