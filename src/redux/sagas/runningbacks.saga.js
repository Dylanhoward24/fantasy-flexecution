import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

export default function* runningBacksSaga() {
  yield takeLatest('FETCH_RUNNINGBACKS', fetchRunningBacks);
  yield takeLatest('FETCH_BRETT_RUNNINGBACKS', fetchBrettRunningBacks);
  yield takeLatest('FETCH_KYLE_RUNNINGBACKS', fetchKyleRunningBacks);
}

function* fetchRunningBacks() {
    try {
        const response = yield axios.get('/api/runningbacks/'); 
        yield put({ type: 'SET_RUNNINGBACKS', payload: response.data });
    }
    catch (error) {
        console.log('runningbacks get request failed', error);
    }
}

function* fetchBrettRunningBacks() {
    try {
        const response = yield axios.get('/api/runningbacks/brett'); 
        yield put({ type: 'SET_BRETT_RUNNINGBACKS', payload: response.data });
    }
    catch (error) {
        console.log('brett runningbacks get request failed', error);
    }
}

function* fetchKyleRunningBacks() {
    try {
        const response = yield axios.get('/api/runningbacks/kyle');
        yield put({ type: 'SET_KYLE_RUNNINGBACKS', payload: response.data });
    }
    catch (error) {
        console.log('kyle runningbacks get request failed', error);
    }
}