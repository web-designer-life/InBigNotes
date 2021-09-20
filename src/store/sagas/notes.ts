import { 
    delay, 
    put, 
    all, 
    takeEvery, 
} from 'redux-saga/effects';
import { TEXTS } from '../../constants/texts';
import { Note } from '../../interfaces';
import { sortByFilterType } from '../../utils';
import actions from '../actions';

type Params = { id: string, note: Note, notes: Note[], filter: string, type: string };

function* fetchNotes({ filter }: Params) {
    yield delay(1500);

    let notes = JSON.parse(localStorage.getItem(TEXTS.NOTES)!) || [];

    if (notes.length) {
        notes = sortByFilterType(notes, filter);
    }

    yield put({ type: actions.FETCH_NOTES_SUCCESS, payload: notes });
};

function* deleteNotes({ notes }: Params) {
    yield delay(1500);

    localStorage.setItem(TEXTS.NOTES, JSON.stringify(notes));

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
