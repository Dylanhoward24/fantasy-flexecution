import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

export default function* tightEndsSaga() {
  yield takeLatest('FETCH_TIGHTENDS', fetchTightEnds);
  yield takeLatest('FETCH_BRETT_TIGHTENDS', fetchBrettTightEnds);
  yield takeLatest('FETCH_KYLE_TIGHTENDS', fetchKyleTightEnds);
}

function* fetchTightEnds() {
    try {
        const response = yield axios.get('/api/tight-ends/'); 
        yield put({ type: 'SET_TIGHTENDS', payload: response.data });
    }
    catch (error) {
        console.log('tightends get request failed', error);
    }
}

function* fetchBrettTightEnds() {
    try {
        const response = yield axios.get('/api/tight-ends//brett'); 
        yield put({ type: 'SET_BRETT_TIGHTENDS', payload: response.data });
    }
    catch (error) {
        console.log('brett tightends get request failed', error);
    }
}

function* fetchKyleTightEnds() {
    try {
        const response = yield axios.get('/api/tight-ends//kyle');
        yield put({ type: 'SET_KYLE_TIGHTENDS', payload: response.data });
    }
    catch (error) {
        console.log('kyle tightends get request failed', error);
    }
}