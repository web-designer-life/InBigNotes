import actions from '.';
import { Note } from '../../interfaces';

export const fetchNotes = () => ({
    type: actions.FETCH_NOTES_PENDING,
});

export const deleteNotes = (notes: Note[]) => ({
    type: actions.DELETE_NOTES_PENDING,
    notes,
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
