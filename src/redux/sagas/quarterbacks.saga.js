import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
 
export default function* quarterbacksSaga() {
  yield takeLatest('FETCH_BRETT_QUARTERBACKS', fetchBrettQuarterbacks);
  yield takeLatest('FETCH_KYLE_QUARTERBACKS', fetchKyleQuarterbacks);
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