import actions from '../actions';

const initialState = {
    isLoading: false,
    selectedNotes: [],
    note: {},
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
                note: action.payload, 
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
                redirect: true,
            };
        case actions.REDIRECT:
            return {
                ...state,
                redirect: true,
            };
        case actions.RESET_STORE: 
            return initialState;
        default:
            return state;
    }
};
