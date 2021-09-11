import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

export default function* tagsSaga() {
    yield takeLatest('FETCH_TAGS', fetchTags);
}  

function* fetchTags() {
  try {
    // response is the data from the server
    const response = yield axios.get('/api/tags');

    // dispatch (put) that response via shouting SET_TAGS
    yield put({ type: 'SET_TAGS', payload: response.data });
  }
  catch (error) {
    console.log('listener requests get request failed', error);
  }
}