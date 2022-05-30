import actions from '../actions';
import { INote } from '../interfaces';

const fetchNoteData = (id: string) => ({
    type: actions.FETCH_NOTE_PENDING,
    payload: { id },
});

const fetchNoteSuccess = (note: INote) => ({
    type: actions.FETCH_NOTE_SUCCESS,
    payload: { note },
});

const fetchNoteFail = () => ({
    type: actions.FETCH_NOTE_FAIL,
});

const addNoteData = (note: INote) => ({
    type: actions.ADD_NOTE_PENDING,
    payload: { note },
});

const addNoteSuccess = () => ({
    type: actions.ADD_NOTE_SUCCESS,
});

const addNoteFail = () => ({
    type: actions.ADD_NOTE_FAIL,
});

const updateNoteData = (note: INote) => ({
    type: actions.UPDATE_NOTE_PENDING,
    payload: { note },
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
