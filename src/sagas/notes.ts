import { 
    delay, 
    put, 
    all, 
    takeEvery, 
} from 'redux-saga/effects';
import { TEXTS } from '../constants';
import { sortByFilterType } from '../utils';
import actions from '../actions';
import { 
    deleteNotesFail, 
    deleteNotesSuccess, 
    fetchNotesFail, 
    fetchNotesSuccess,
} from '../actionCreators/notes';

function* fetchNotes({ payload } : any) {
    const { filter } = payload;
    
    try {
        yield delay(1500);
    
        let notes = JSON.parse(localStorage.getItem(TEXTS.STORAGE_NAME)!) || [];
    
        if (notes.length) {
            notes = sortByFilterType(notes, filter);
        }

        yield put(fetchNotesSuccess(notes));
	} catch (e) {
		yield put(fetchNotesFail());
	}
};

function* deleteNotes({ payload } : any) {
    const { notes } = payload;

    try {
        yield delay(1500);
    
        localStorage.setItem(TEXTS.STORAGE_NAME, JSON.stringify(notes));
    
        yield put(deleteNotesSuccess());
        yield put(fetchNotesSuccess(notes));        
	} catch (e) {
		yield put(deleteNotesFail());
	}
};

export default function notesSaga() {
    return all([ 
        takeEvery(actions.FETCH_NOTES_PENDING, fetchNotes),
        takeEvery(actions.DELETE_NOTES_PENDING, deleteNotes),
    ]);
};
