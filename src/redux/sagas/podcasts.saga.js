import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

export default function* podcastsSaga() {
    yield takeLatest('FETCH_PODCASTS', fetchPodcasts);
    yield takeLatest('FETCH_LANDING_PAGE_PODCASTS', fetchLandingPagePodcasts)
}  

function* fetchPodcasts() {
  try {
    // response is the data from the server
    const response = yield axios.get('/api/podcasts');

    // dispatch (put) that response via shouting SET_PODCASTS
    yield put({ type: 'SET_PODCASTS', payload: response.data });
  }
  catch (error) {
    console.log('podcasts get request failed', error);
  }
}

function* fetchLandingPagePodcasts() {
  try {
    // response is the data from the server
    const response = yield axios.get('/api/podcasts/landing-page');

    // dispatch (put) that response via shouting SET_LANDING_PAGE_PODCASTS
    yield put({ type: 'SET_LANDING_PAGE_PODCASTS', payload: response.data });
  }
  catch (error) {
    console.log('podcasts get request failed', error);
  }
}