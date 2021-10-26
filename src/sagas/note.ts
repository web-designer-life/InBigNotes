import {
    delay,
    put,
    takeEvery,
    all,
} from 'redux-saga/effects';
import { push } from 'connected-react-router';
import {
    fetchNoteSuccess,
    fetchNoteFail,
    addNoteSuccess,
    addNoteFail,
    updateNoteSuccess,
    updateNoteFail,
} from '../actionCreators/note';
import { INote } from '../interfaces';
import actions from '../actions';
import { ROUTES, TEXTS } from '../constants';

export function* fetchNote({ payload }: any) {
    const { id } = payload;

    try {
        yield delay(1500);

        const notes = JSON.parse(window.localStorage.getItem(TEXTS.STORAGE_NAME)!) || [];

        const note = notes.find((currentNote: INote) => currentNote.id === id);

        if (!note) {
            throw new Error('No note');
        }

        yield put(fetchNoteSuccess(note));
    } catch (e) {
        yield put(fetchNoteFail());
    }
};

export function* addNote({ payload }: any) {
    const { note } = payload;

    try {
        yield put(push(ROUTES.HOME));

        yield delay(1500);

        if (!note) {
            throw new Error('No note');
        }

        const notes = JSON.parse(window.localStorage.getItem(TEXTS.STORAGE_NAME)!) || [];

        notes.push(note);

        window.localStorage.setItem(TEXTS.STORAGE_NAME, JSON.stringify(notes));

        yield put(addNoteSuccess());
    } catch (e) {
        yield put(addNoteFail());
    }
};

export function* updateNote({ payload }: any) {
    const { note } = payload;

    try {
        yield put(push(ROUTES.HOME));

        yield delay(1500);

        if (!note) {
            throw new Error('No note');
        }

        const notes = JSON.parse(window.localStorage.getItem(TEXTS.STORAGE_NAME)!) || [];

        const modifiedNotes = notes.filter((elem: INote) => elem.id !== note.id);

        modifiedNotes.push(note);

        window.localStorage.setItem(TEXTS.STORAGE_NAME, JSON.stringify(modifiedNotes));

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
