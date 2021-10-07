import actions from '../actions';
import { INote } from '../interfaces';

const fetchNotesData = (filter: string) => ({
	type: actions.FETCH_NOTES_PENDING,
    payload: { filter },
});

const fetchNotesSuccess = (notes: INote[]) => ({
    type: actions.FETCH_NOTES_SUCCESS,
    payload: { notes },
});

const fetchNotesFail = () => ({
    type: actions.FETCH_NOTES_FAIL,
});

const deleteNotesData = (notes: INote[]) => ({
    type: actions.DELETE_NOTES_PENDING,
    payload: { notes },
});

const deleteNotesSuccess = () => ({
    type: actions.DELETE_NOTES_SUCCESS,
});

const deleteNotesFail = () => ({
    type: actions.DELETE_NOTES_FAIL,
});

const addSelectedNote = (note: INote) => ({
    type: actions.ADD_SELECTED_NOTE,
    payload: { note },
});

const removeUnselectedNote = (note: INote) => ({
    type: actions.REMOVE_UNSELECTED_NOTE,
    payload: { note },
});

const selectAllNotes = (notes: INote[]) => ({
    type: actions.SELECT_ALL_NOTES,
    payload: { notes },
});

const unselectAllNotes = () => ({
    type: actions.UNSELECT_ALL_NOTES,
});

const filter = (filter: string) => ({
    type: actions.FILTER,
    payload: { filter },
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
