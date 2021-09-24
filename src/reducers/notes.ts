import { TEXTS } from '../constants';
import { Note } from '../interfaces';
import actions from '../actions';

const initialState = {
    notes: [],
    isLoading: false,
    selectedNotes: [],
    filter: TEXTS.FILTER.NAME.VALUE,
    error: false,
};

export default function rootReducer(state = initialState, action: any) {
    switch (action.type) {
        case actions.FETCH_NOTES_PENDING:
            return {
                ...state, 
                isLoading: true,
            };
        case actions.FETCH_NOTES_SUCCESS:
            return {
                ...state, 
                notes: action.payload, 
                isLoading: false,
            };
        case actions.DELETE_NOTES_PENDING:
            return {
                ...state, 
                notes: action.notes,
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
                selectedNotes: [].concat(state.selectedNotes, action.note.id),
            };
        case actions.REMOVE_UNSELECTED_NOTE:
            return {
                ...state,
                selectedNotes: state.selectedNotes.filter((index) => (index !== action.note.id)),
            };
        case actions.SELECT_ALL_NOTES:
            return {
                ...state, 
                selectedNotes: [].concat([], (action.notes).map((note: Note) => note.id)),
            };
        case actions.UNSELECT_ALL_NOTES:
            return {
                ...state,
                selectedNotes: [],
            };
        case actions.FILTER:
            return {
                ...state, 
                filter: action.filter,
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
