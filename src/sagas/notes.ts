import { delay, put, all, takeEvery } from 'redux-saga/effects';
import actions from '../actions';

function* fetchNotes() {
    yield delay(1500);

    const notes = JSON.parse(localStorage.getItem('notes')!) || [];

    yield put({ type: actions.FETCH_NOTES_SUCCESS, payload: notes });
};

export default function notesSaga() {
    return all([ takeEvery(actions.FETCH_NOTES_PENDING, fetchNotes) ]) 
};