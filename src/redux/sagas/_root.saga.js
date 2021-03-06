import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import listenerRequestSaga from './listenerRequest.saga';
import comingUpSaga from './comingUp.saga';
import podcastsSaga from './podcasts.saga';
import positionsSaga from './positions.saga';
import tagsSaga from './tags.saga';
import teamsSaga from './teams.saga';
import tiersSaga from './tiers.saga';
import hostsSaga from './hosts.saga';
import playersSaga from './players.saga';
import quarterbacksSaga from './quarterbacks.saga';
import runningBacksSaga from './runningBacks.saga';
import wideReceiversSaga from './wideReceivers.saga';
import tightEndsSaga from './tightEnds.saga';
 
// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga
 
// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
 yield all([
   loginSaga(), // login saga is now registered
   registrationSaga(),
   userSaga(),
   listenerRequestSaga(),
   comingUpSaga(),
   podcastsSaga(),
   tagsSaga(),
   positionsSaga(),
   teamsSaga(),
   tiersSaga(),
   hostsSaga(),
   playersSaga(),
   quarterbacksSaga(),
   runningBacksSaga(),
   wideReceiversSaga(),
   tightEndsSaga(),
 ]);
}