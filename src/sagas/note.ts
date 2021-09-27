import { 
    delay, 
    put, 
    all, 
    takeEvery,
    call, 
} from 'redux-saga/effects';
import { history } from '../store/store';
import { ROUTES, TEXTS } from '../constants';
import actions from '../actions';
import { Note } from '../interfaces';
import { 
    addNoteFail, 
    addNoteSuccess, 
    fetchNoteFail, 
    fetchNoteSuccess, 
    updateNoteFail, 
    updateNoteSuccess, 
} from '../actionCreators/note';

type Params = { id: string, note: Note, type: string };

function* fetchNote({ id }: Params) {
    try {
        yield delay(1500);
        
        const notes = JSON.parse(localStorage.getItem(TEXTS.STORAGE_NAME)!) || [];
        
        const note = notes.find((note: Note) => note.id === id);

        if (!note) {
            throw new Error('No note');
        }

        yield put(fetchNoteSuccess(note));
	} catch (e) {
		yield put(fetchNoteFail());
	}
};

function* addNote({ note }: Params) {  
    try {
        yield call(history.push, ROUTES.HOME);
        
        yield delay(1500);

        const notes = JSON.parse(localStorage.getItem(TEXTS.STORAGE_NAME)!) || [];

        notes.push(note);

        localStorage.setItem(TEXTS.STORAGE_NAME, JSON.stringify(notes));

        yield put(addNoteSuccess());
	} catch (e) {
		yield put(addNoteFail());
	}
};

function* updateNote({ note }: Params) {
    try {
		yield call(history.push, ROUTES.HOME);

        yield delay(1500);

        const notes = JSON.parse(localStorage.getItem(TEXTS.STORAGE_NAME)!) || [];

        const modifiedNotes = notes.filter((elem: Note) => elem.id !== note.id);

        modifiedNotes.push(note);

        localStorage.setItem(TEXTS.STORAGE_NAME, JSON.stringify(modifiedNotes));

        yield put(updateNoteSuccess());
	} catch (e) {
		yield put(updateNoteFail());
	}
};

export default function noteSaga() {
    return all([ 
        takeEvery(actions.FETCH_NOTE_PENDING, fetchNote),
        takeEvery(actions.ADD_NOTE_PENDING, addNote),
        takeEvery(actions.UPDATE_NOTE_PENDING, updateNote),
    ]);
};
