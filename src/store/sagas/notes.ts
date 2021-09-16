import { 
    delay, 
    put, 
    all, 
    takeEvery, 
} from 'redux-saga/effects';
import { Note } from '../../interfaces';
import actions from '../actions';

type Params = { id: string, note: Note, notes: Note[], type: string };

function* fetchNotes() {
    yield delay(1500);

    const notes = JSON.parse(localStorage.getItem('notes')!) || [];

    yield put({ type: actions.FETCH_NOTES_SUCCESS, payload: notes });
};

function* deleteNotes({ notes }: Params) {
    yield delay(1500);

    localStorage.setItem('notes', JSON.stringify(notes));

    yield put({ type: actions.DELETE_NOTES_SUCCESS });
    yield put({ type: actions.FETCH_NOTES_SUCCESS, payload: notes });
};

function* redirect() {
    yield put({ type: actions.REDIRECT});
};

export default function notesSaga() {
    return all([ 
        takeEvery(actions.FETCH_NOTES_PENDING, fetchNotes),
        takeEvery(actions.DELETE_NOTES_PENDING, deleteNotes),
        takeEvery(actions.ADD_NOTE_PENDING, redirect),
    ]);
};
