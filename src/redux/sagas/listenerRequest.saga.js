import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

export default function* listenerRequestsSaga() {
    yield takeLatest('FETCH_LISTENER_REQUESTS', fetchListenerRequests);
}  

function* fetchListenerRequests() {
  try {
    // response is the data from the server
    const response = yield axios.get('/api/listener-requests');

    // dispatch (put) that response via shouting SET_LISTENER_REQUESTS
    yield put({ type: 'SET_LISTENER_REQUESTS', payload: response.data });
  }
  catch (error) {
    console.log('listener requests get request failed', error);
  }
}