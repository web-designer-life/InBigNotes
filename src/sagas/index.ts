import { put, takeLatest, all } from 'redux-saga/effects';
import { FETCH_NOTES_PENDING, FETCH_NOTES_SUCCESS } from '../actions/index';

function* fetchNotes() {
    let json;

    setTimeout(() => {
        json = localStorage.getItem("notes");
    }, 1500);

    yield put({ type: FETCH_NOTES_SUCCESS, notes: json || [{ error: "Problems" }] });
};

function actionWatcher() {
    return all([takeLatest(FETCH_NOTES_PENDING, fetchNotes)])
};

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
};