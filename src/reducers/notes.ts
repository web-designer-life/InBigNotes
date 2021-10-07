import { TEXTS } from '../constants';
import { INote } from '../interfaces';
import actions from '../actions';

const initialState = {
    notes: [],
    isLoading: false,
    selectedNotes: [],
    filter: TEXTS.FILTER.NAME.VALUE,
    error: false,
};

export default function rootReducer(state = initialState, { type, payload } : any) {
    switch (type) {
        case actions.FETCH_NOTES_PENDING:
            return {
                ...state, 
                isLoading: true,
            };
        case actions.FETCH_NOTES_SUCCESS:
            return {
                ...state, 
                notes: payload.notes, 
                isLoading: false,
            };
        case actions.DELETE_NOTES_PENDING:
            return {
                ...state, 
                notes: payload.notes,
                isLoading: true,
            };
        case actions.DELETE_NOTES_SUCCESS:
            return {
                ...state, 
                isLoading: false,
            };
        case actions.ADD_SELECTED_NOTE:
            return {
                ...state, 
                selectedNotes: [].concat(state.selectedNotes, payload.note.id),
            };
        case actions.REMOVE_UNSELECTED_NOTE:
            return {
                ...state,
                selectedNotes: state.selectedNotes.filter((index) => (index !== payload.note.id)),
            };
        case actions.SELECT_ALL_NOTES:
            return {
                ...state, 
                selectedNotes: [].concat([], payload.notes.map((note: INote) => note.id)),
            };
        case actions.UNSELECT_ALL_NOTES:
            return {
                ...state,
                selectedNotes: [],
            };
        case actions.FILTER:
            return {
                ...state, 
                filter: payload.filter,
            };
        case actions.FETCH_NOTES_FAIL:
        case actions.DELETE_NOTES_FAIL:
            return {
                ...state,
                isLoading: false,
                error: true,
            };
        case actions.RESET_STORE: 
            return initialState;
        default:
            return state;
    }
};
