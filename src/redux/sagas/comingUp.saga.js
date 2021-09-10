import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

export default function* comingUpSaga() {
    yield takeLatest('FETCH_COMING_UP', fetchComingUp);
}  

function* fetchComingUp() {
  try {
    // response is the data from the server
    const response = yield axios.get('/api/coming-up');

    // dispatch (put) that response via shouting SET_COMING_UP
    yield put({ type: 'SET_COMING_UP', payload: response.data });
  }
  catch (error) {
    console.log('comingUp get request failed', error);
  }
}