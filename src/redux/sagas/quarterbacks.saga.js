import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
 
export default function* quarterbacksSaga() {
  yield takeLatest('FETCH_QUARTERBACKS', fetchQuarterbacks);
  yield takeLatest('FETCH_BRETT_QUARTERBACKS', fetchBrettQuarterbacks);
  yield takeLatest('FETCH_KYLE_QUARTERBACKS', fetchKyleQuarterbacks);
}

function* fetchQuarterbacks() {
    try {
        const response = yield axios.get('/api/quarterbacks/'); 
        yield put({ type: 'SET_QUARTERBACKS', payload: response.data });
    }
    catch (error) {
        console.log('quarterbacks get request failed', error);
    }
}

function* fetchBrettQuarterbacks() {
    try {
        const response = yield axios.get('/api/quarterbacks/brett'); 
        yield put({ type: 'SET_BRETT_QUARTERBACKS', payload: response.data });
    }
    catch (error) {
        console.log('brett quarterbacks get request failed', error);
    }
}

function* fetchKyleQuarterbacks() {
    try {
        const response = yield axios.get('/api/quarterbacks/kyle');
        yield put({ type: 'SET_KYLE_QUARTERBACKS', payload: response.data });
    }
    catch (error) {
        console.log('kyle quarterbacks get request failed', error);
    }
}