import actions from '.';
import { Note } from '../interfaces';

export const fetchNotesData = (filter: string) => ({
	type: actions.FETCH_NOTES_PENDING,
    filter,
});

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

export const deleteNotesData = (notes: Note[]) => ({
    type: actions.DELETE_NOTES_PENDING,
    notes,
});

export const fetchNotesSuccess = (filter: string) => ({
    type: actions.FETCH_NOTES_SUCCESS,
    filter,
});

export const fetchNotesFail = () => ({
    type: actions.FETCH_NOTES_FAIL,
});

export const fetchNoteSuccess = (id: string) => ({
    type: actions.FETCH_NOTE_SUCCESS,
    id,
});

export const fetchNoteFail = () => ({
    type: actions.FETCH_NOTE_FAIL,
});

export const addNoteSuccess = (note: Note) => ({
    type: actions.ADD_NOTE_SUCCESS,
    note,
});

export const addNoteFail = () => ({
    type: actions.ADD_NOTE_FAIL,
});

export const updateNoteSuccess = (note: Note) => ({
    type: actions.UPDATE_NOTE_SUCCESS,
    note,
});

export const updateNoteFail = () => ({
	type: actions.UPDATE_NOTE_FAIL,
});

export const deleteNotesSuccess = (notes: Note[]) => ({
    type: actions.DELETE_NOTES_SUCCESS,
    notes,
});

export const deleteNotesFail = () => ({
    type: actions.DELETE_NOTES_FAIL,
});

export const addSelectedNote = (note: Note) => ({
    type: actions.ADD_SELECTED_NOTE,
    note,
});

export const removeUnselectedNote = (note: Note) => ({
    type: actions.REMOVE_UNSELECTED_NOTE,
    note,
});

export const selectAllNotes = (notes: Note[]) => ({
    type: actions.SELECT_ALL_NOTES,
    notes,
});

export const unselectAllNotes = () => ({
    type: actions.UNSELECT_ALL_NOTES,
});

export const filter = (filter: string) => ({
    type: actions.FILTER,
    filter,
});

export const navigateToPage = (path: string) => ({
    type: actions.NAVIGATE_TO_PAGE,
    path,
});

export const resetStore = () => ({
    type: actions.RESET_STORE,
});
