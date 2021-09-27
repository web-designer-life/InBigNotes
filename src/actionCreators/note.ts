import actions from '../actions';
import { Note } from '../interfaces';

const fetchNoteData = (id: string) => ({
	type: actions.FETCH_NOTE_PENDING,
    id,
});

const fetchNoteSuccess = (note: Note) => ({
    type: actions.FETCH_NOTE_SUCCESS,
    note,
});

const fetchNoteFail = () => ({
    type: actions.FETCH_NOTE_FAIL,
});

const addNoteData = (note: Note) => ({
	type: actions.ADD_NOTE_PENDING,
	note,
});

const addNoteSuccess = () => ({
    type: actions.ADD_NOTE_SUCCESS,
});

const addNoteFail = () => ({
    type: actions.ADD_NOTE_FAIL,
});

const updateNoteData = (note: Note) => ({
	type: actions.UPDATE_NOTE_PENDING,
	note,
});

const updateNoteSuccess = () => ({
    type: actions.UPDATE_NOTE_SUCCESS,
});

const updateNoteFail = () => ({
	type: actions.UPDATE_NOTE_FAIL,
});

export {
    fetchNoteData,
    fetchNoteSuccess,
    fetchNoteFail,
    addNoteData,
    addNoteSuccess,
    addNoteFail,
    updateNoteData,
    updateNoteSuccess,
    updateNoteFail,
};
