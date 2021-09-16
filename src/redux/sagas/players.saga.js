import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
 
export default function* playersSaga() {
  yield takeLatest('FETCH_PLAYERS', fetchPlayers);
} 
 
function* fetchPlayers() {
  try {
  // response is the data from the server
  const response = yield axios.get('/api/players/');

  // dispatch (put) that response via shouting SET_TAGS
  yield put({ type: 'SET_PLAYERS', payload: response.data });
  }
  catch (error) {
  console.log('tags get request failed', error);
  }
}