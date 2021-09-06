import { delay, put, all, takeEvery } from 'redux-saga/effects';
import { Note } from '../../interfaces';
import actions from '../actions';

type Params = { id: string, note: Note, notes: Note[], type: string }

function* fetchNotes() {
    yield delay(1500);

    const notes = JSON.parse(localStorage.getItem('notes')!) || [];

    yield put({ type: actions.FETCH_NOTES_SUCCESS, payload: notes });
};

function* fetchNote({ id }: Params) {
    yield delay(1500);

    const notes = JSON.parse(localStorage.getItem('notes')!) || [];

    const note = notes.find((note: Note) => note.id === id);

    yield put({ type: actions.FETCH_NOTE_SUCCESS, payload: note });
};

function* addNote({ note }: Params) {
    yield delay(1500);

    const notes = JSON.parse(localStorage.getItem('notes')!) || [];

    notes.push(note);

    localStorage.setItem('notes', JSON.stringify(notes));

    yield put({ type: actions.ADD_NOTE_SUCCESS });
    yield put({ type: actions.FETCH_NOTES_SUCCESS, payload: notes });
};

function* deleteNotes({ notes }: Params) {
    yield delay(1500);

    localStorage.setItem('notes', JSON.stringify(notes));

    yield put({ type: actions.DELETE_NOTES_SUCCESS });
    yield put({ type: actions.FETCH_NOTES_SUCCESS, payload: notes });
};

export default function notesSaga() {
    return all([ 
        takeEvery(actions.FETCH_NOTES_PENDING, fetchNotes),
        takeEvery(actions.FETCH_NOTE_PENDING, fetchNote),
        takeEvery(actions.ADD_NOTE_PENDING, addNote),
        takeEvery(actions.DELETE_NOTES_PENDING, deleteNotes),
    ]);
};
