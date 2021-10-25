import { 
    all,
    delay, 
    put,  
    takeEvery, 
} from 'redux-saga/effects';
import { 
    fetchNotesSuccess,
    fetchNotesFail, 
    deleteNotesSuccess, 
    deleteNotesFail, 
} from '../actionCreators/notes';
import { sortByFilterType } from '../utils';
import actions from '../actions';
import { TEXTS } from '../constants';

export function* fetchNotes({ payload } : any) {
    const { filterType } = payload;
    
    try {
        yield delay(1500);
    
        let notes = JSON.parse(window.localStorage.getItem(TEXTS.STORAGE_NAME)!) || [];
    
        if (notes.length) {
            notes = sortByFilterType(notes, filterType);
        }

        yield put(fetchNotesSuccess(notes));
	} catch (e) {
		yield put(fetchNotesFail());
	}
};

export function* deleteNotes({ payload } : any) {
    const { notes } = payload;

    try {
        yield delay(1500);
    
        window.localStorage.setItem(TEXTS.STORAGE_NAME, JSON.stringify(notes));
    
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
