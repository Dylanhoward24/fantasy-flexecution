import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// set up the global "listener" for shouts
export default function* listenerRequestSaga() {
    yield takeLatest('SUBMIT_LISTENER_REQUEST', submitListenerRequest);
  }

// function that's ran when the shout is heard
function* submitListenerRequest(action) {
  try {
    axios.post('/api/listener-request', action.payload);
  }
  catch (error) {
    console.log('User get request failed', error);
  }
}