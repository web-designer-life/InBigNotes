import actions from '../actions';

const initialState = {
    isLoading: false,
    note: {},
    error: false,
};

export default function rootReducer(state = initialState, action: any) {
    switch (action.type) {
        case actions.FETCH_NOTE_PENDING:
            return {
                ...state, 
                id: action.id,
                isLoading: true,
            };
        case actions.FETCH_NOTE_SUCCESS:
            return {
                ...state, 
                note: action.note, 
                isLoading: false,
            };
        case actions.ADD_NOTE_PENDING:
            return {
                ...state, 
                note: action.note,
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
                note: action.note,
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
