import actions from '../actions';

export const initialState = {
    notes: [],
    isLoading: false,
};

export function rootReducer(state = initialState, action: any) {
    switch (action.type) {
        case actions.FETCH_NOTES_PENDING:
            return {...state, isLoading: true};
        case actions.FETCH_NOTES_SUCCESS:
            return {...state, notes: action.payload, isLoading: false};
        default:
            return state;
    }
};
