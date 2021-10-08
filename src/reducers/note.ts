import actions from '../actions';

export const initialState = {
    note: {},
    isLoading: false,
    error: false,
};

export default function noteReducer(state = initialState, { type, payload } : any) {
    switch (type) {
        case actions.FETCH_NOTE_PENDING:
            return {
                ...state, 
                id: payload.id,
                isLoading: true,
            };
        case actions.FETCH_NOTE_SUCCESS:
            return {
                ...state, 
                note: payload.note, 
                isLoading: false,
            };
        case actions.ADD_NOTE_PENDING:
            return {
                ...state, 
                note: payload.note,
                isLoading: true,
            };
        case actions.ADD_NOTE_SUCCESS:
            return {
                ...state, 
                isLoading: false,
            };
        case actions.UPDATE_NOTE_PENDING:
            return {
                ...state, 
                note: payload.note,
                isLoading: true,
            };
        case actions.UPDATE_NOTE_SUCCESS:
            return {
                ...state, 
                isLoading: false,
            };
        case actions.FETCH_NOTE_FAIL:
        case actions.ADD_NOTE_FAIL:
        case actions.UPDATE_NOTE_FAIL:
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
