import actions from '../actions';
import { Note } from '../interfaces';

export const fetchNotesData = (filter: string) => ({
	type: actions.FETCH_NOTES_PENDING,
    filter,
});

export const deleteNotesData = (notes: Note[]) => ({
    type: actions.DELETE_NOTES_PENDING,
    notes,
});

export const fetchNotesSuccess = (payload: Note[]) => ({
    type: actions.FETCH_NOTES_SUCCESS,
    payload,
});

export const fetchNotesFail = () => ({
    type: actions.FETCH_NOTES_FAIL,
});

export const deleteNotesSuccess = () => ({
    type: actions.DELETE_NOTES_SUCCESS,
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
