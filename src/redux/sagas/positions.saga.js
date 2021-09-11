import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

export default function* positionsSaga() {
    yield takeLatest('FETCH_POSITIONS', fetchPositions);
}  

function* fetchPositions() {
  try {
    // response is the data from the server
    const response = yield axios.get('/api/positions');

    // dispatch (put) that response via shouting SET_POSITIONS
    yield put({ type: 'SET_POSITIONS', payload: response.data });
  }
  catch (error) {
    console.log('positions get request failed', error);
  }
}