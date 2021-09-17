import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

export default function* runningbacksSaga() {
  yield takeLatest('FETCH_BRETT_RUNNINGBACKS', fetchBrettRunningbacks);
  yield takeLatest('FETCH_KYLE_RUNNINGBACKS', fetchKyleRunningbacks);
}

function* fetchBrettRunningbacks() {
    try {
        const response = yield axios.get('/api/runningbacks/brett'); 
        yield put({ type: 'SET_BRETT_RUNNINGBACKS', payload: response.data });
    }
    catch (error) {
        console.log('brett runningbacks get request failed', error);
    }
}

function* fetchKyleRunningbacks() {
    try {
        const response = yield axios.get('/api/runningbacks/kyle');
        yield put({ type: 'SET_KYLE_RUNNINGBACKS', payload: response.data });
    }
    catch (error) {
        console.log('kyle runningbacks get request failed', error);
    }
}