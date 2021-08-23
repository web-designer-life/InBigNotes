import { FETCH_NOTES_PENDING, FETCH_NOTES_SUCCESS } from '../actions/index';

const reducer = (state = {}, action: any) => {
    switch (action.type) {
        case FETCH_NOTES_PENDING:
            return { ...state, loading: true };
        case FETCH_NOTES_SUCCESS:
            return { ...state, notes: action.notes, loading: false }
        default:
            return state;
    }
};

export default reducer;
