import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
 
export default function* hostsSaga() {
   yield takeLatest('FETCH_HOSTS', fetchHosts);
} 
 
function* fetchHosts() {
 try {
   // response is the data from the server
   const response = yield axios.get('/api/hosts');
 
   // dispatch (put) that response via shouting SET_HOSTS
   yield put({ type: 'SET_HOSTS', payload: response.data });
 }
 catch (error) {
   console.log('hosts get request failed', error);
 }
}