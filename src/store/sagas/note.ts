import { 
    delay, 
    put, 
    all, 
    takeEvery, 
} from 'redux-saga/effects';
import { TEXTS } from '../../constants/texts';
import { Note } from '../../interfaces';
import actions from '../actions';

type Params = { id: string, note: Note, type: string };

function* fetchNote({ id }: Params) {
    yield delay(1500);

    const notes = JSON.parse(localStorage.getItem(TEXTS.STORAGE_NAME)!) || [];

    const note = notes.find((note: Note) => note.id === id);

    yield put({ type: actions.FETCH_NOTE_SUCCESS, payload: note });
};

function* addNote({ note }: Params) {
    yield put({ type: actions.REDIRECT });
    
    yield delay(1500);

    const notes = JSON.parse(localStorage.getItem(TEXTS.STORAGE_NAME)!) || [];

    notes.push(note);

    localStorage.setItem(TEXTS.STORAGE_NAME, JSON.stringify(notes));

    yield put({ type: actions.ADD_NOTE_SUCCESS });
};

function* updateNote({ note }: Params) {
    yield put({ type: actions.REDIRECT });

    yield delay(1500);

    const notes = JSON.parse(localStorage.getItem(TEXTS.STORAGE_NAME)!) || [];

    const modifiedNotes = notes.filter((elem: Note) => elem.id !== note.id);

    modifiedNotes.push(note);

    localStorage.setItem(TEXTS.STORAGE_NAME, JSON.stringify(modifiedNotes));

    yield put({ type: actions.UPDATE_NOTE_SUCCESS });
};

export default function noteSaga() {
    return all([ 
        takeEvery(actions.FETCH_NOTE_PENDING, fetchNote),
        takeEvery(actions.ADD_NOTE_PENDING, addNote),
        takeEvery(actions.UPDATE_NOTE_PENDING, updateNote),
    ]);
};
