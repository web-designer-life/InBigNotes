import actions from '../actions';
import { Note } from '../interfaces';

export const fetchNoteData = (id: string) => ({
	type: actions.FETCH_NOTE_PENDING,
    id,
});

export const addNoteData = (note: Note) => ({
	type: actions.ADD_NOTE_PENDING,
	note,
});

export const updateNoteData = (note: Note) => ({
	type: actions.UPDATE_NOTE_PENDING,
	note,
});

export const fetchNoteSuccess = (payload: Note) => ({
    type: actions.FETCH_NOTE_SUCCESS,
    payload,
});

export const fetchNoteFail = () => ({
    type: actions.FETCH_NOTE_FAIL,
});

export const addNoteSuccess = () => ({
    type: actions.ADD_NOTE_SUCCESS,
});

export const addNoteFail = () => ({
    type: actions.ADD_NOTE_FAIL,
});

export const updateNoteSuccess = () => ({
    type: actions.UPDATE_NOTE_SUCCESS,
});

export const updateNoteFail = () => ({
	type: actions.UPDATE_NOTE_FAIL,
});
