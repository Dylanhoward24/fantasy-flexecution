import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

export default function* teamsSaga() {
    yield takeLatest('FETCH_TEAMS', fetchTeams);
}  

function* fetchTeams() {
  try {
    // response is the data from the server
    const response = yield axios.get('/api/teams');

    // dispatch (put) that response via shouting SET_TEAMS
    yield put({ type: 'SET_TEAMS', payload: response.data });
  }
  catch (error) {
    console.log('teams get request failed', error);
  }
}