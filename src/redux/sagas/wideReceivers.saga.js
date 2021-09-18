import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

export default function* wideReceiversSaga() {
  yield takeLatest('FETCH_WIDERECEIVERS', fetchWideReceivers);
  yield takeLatest('FETCH_BRETT_WIDERECEIVERS', fetchBrettWideReceivers);
  yield takeLatest('FETCH_KYLE_WIDERECEIVERS', fetchKyleWideReceivers);
}

function* fetchWideReceivers() {
    try {
        const response = yield axios.get('/api/wide-receivers/'); 
        yield put({ type: 'SET_WIDERECEIVERS', payload: response.data });
    }
    catch (error) {
        console.log('widereceivers get request failed', error);
    }
}

function* fetchBrettWideReceivers() {
    try {
        const response = yield axios.get('/api/wide-receivers/brett'); 
        yield put({ type: 'SET_BRETT_WIDERECEIVERS', payload: response.data });
    }
    catch (error) {
        console.log('brett widereceivers get request failed', error);
    }
}

function* fetchKyleWideReceivers() {
    try {
        const response = yield axios.get('/api/wide-receivers/kyle');
        yield put({ type: 'SET_KYLE_WIDERECEIVERS', payload: response.data });
    }
    catch (error) {
        console.log('kyle widereceivers get request failed', error);
    }
}