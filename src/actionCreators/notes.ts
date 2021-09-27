import actions from '../actions';
import { Note } from '../interfaces';

const fetchNotesData = (filter: string) => ({
	type: actions.FETCH_NOTES_PENDING,
    filter,
});

const fetchNotesSuccess = (notes: Note[]) => ({
    type: actions.FETCH_NOTES_SUCCESS,
    notes,
});

const fetchNotesFail = () => ({
    type: actions.FETCH_NOTES_FAIL,
});

const deleteNotesData = (notes: Note[]) => ({
    type: actions.DELETE_NOTES_PENDING,
    notes,
});

const deleteNotesSuccess = () => ({
    type: actions.DELETE_NOTES_SUCCESS,
});

const deleteNotesFail = () => ({
    type: actions.DELETE_NOTES_FAIL,
});

const addSelectedNote = (note: Note) => ({
    type: actions.ADD_SELECTED_NOTE,
    note,
});

const removeUnselectedNote = (note: Note) => ({
    type: actions.REMOVE_UNSELECTED_NOTE,
    note,
});

const selectAllNotes = (notes: Note[]) => ({
    type: actions.SELECT_ALL_NOTES,
    notes,
});

const unselectAllNotes = () => ({
    type: actions.UNSELECT_ALL_NOTES,
});

const filter = (filter: string) => ({
    type: actions.FILTER,
    filter,
});

export {
    fetchNotesData,
    fetchNotesSuccess,
    fetchNotesFail,
    deleteNotesData,
    deleteNotesSuccess,
    deleteNotesFail,
    addSelectedNote,
    removeUnselectedNote,
    selectAllNotes,
    unselectAllNotes,
    filter,
};
