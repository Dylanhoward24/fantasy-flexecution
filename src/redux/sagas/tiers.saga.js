import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
 
export default function* tiersSaga() {
   yield takeLatest('FETCH_TIERS', fetchTiers);
} 
 
function* fetchTiers() {
 try {
   // response is the data from the server
   const response = yield axios.get('/api/tiers');
 
   // dispatch (put) that response via shouting SET_TIERS
   yield put({ type: 'SET_TIERS', payload: response.data });
 }
 catch (error) {
   console.log('tiers get request failed', error);
 }
}