import actions from '../../src/actions';
import reducer from '../../src/reducers/note';
import { initialState } from '../../src/reducers/note';

const ID = 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3';
const NOTE = {
    id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
    title: 'Army',
    text: 'An army, ground force, or land force is a fighting force that fights primarily on land.',
    created_at: 1632734670806,
    updated_at: 1632735522467,
};

describe('reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            note: {},
            isLoading: false,
            error: false,
        });
    });

    it('should handle FETCH_NOTE_PENDING', () => {
        let state = initialState;

        state = reducer(state, {
            type: actions.FETCH_NOTE_PENDING,
            payload: {
                id: ID,
            },
        });

        expect(state).toEqual({
            note: {},
            isLoading: true,
            id: ID,
            error: false,
        });
    });

    it('should handle FETCH_NOTE_SUCCESS', () => {
        let state = initialState;

        state = reducer(state, {
            type: actions.FETCH_NOTE_SUCCESS,
            payload: {
                note: NOTE,
            },
        });

        expect(state).toEqual({
            note: NOTE,
            isLoading: false,
            error: false,
        });
    });

    it('should handle ADD_NOTE_PENDING', () => {
        let state = initialState;

        state = reducer(state, {
            type: actions.ADD_NOTE_PENDING,
            payload: {
                note: NOTE,
            },
        });

        expect(state).toEqual({
            note: NOTE,
            isLoading: true,
            error: false,
        });
    });

    it('should handle ADD_NOTE_SUCCESS', () => {
        let state = initialState;

        state = reducer(state, {
            type: actions.ADD_NOTE_SUCCESS,
        });

        expect(state).toEqual({
            note: {},
            isLoading: false,
            error: false,
        });
    });

    it('should handle UPDATE_NOTE_PENDING', () => {
        let state = initialState;

        state = reducer(state, {
            type: actions.UPDATE_NOTE_PENDING,
            payload: {
                note: NOTE,
            },
        });

        expect(state).toEqual({
            note: NOTE,
            isLoading: true,
            error: false,
        });
    });

    it('should handle UPDATE_NOTE_SUCCESS', () => {
        let state = initialState;

        state = reducer(state, {
            type: actions.UPDATE_NOTE_SUCCESS,
        });

        expect(state).toEqual({
            note: {},
            isLoading: false,
            error: false,
        });
    });

    it('should handle FETCH_NOTE_FAIL', () => {
        let state = initialState;

        state = reducer(state, {
            type: actions.FETCH_NOTE_FAIL,
        });

        expect(state).toEqual({
            note: {},
            isLoading: false,
            error: true,
        });
    });

    it('should handle ADD_NOTE_FAIL', () => {
        let state = initialState;

        state = reducer(state, {
            type: actions.ADD_NOTE_FAIL,
        });

        expect(state).toEqual({
            note: {},
            isLoading: false,
            error: true,
        });
    });

    it('should handle UPDATE_NOTE_FAIL', () => {
        let state = initialState;

        state = reducer(state, {
            type: actions.UPDATE_NOTE_FAIL,
        });

        expect(state).toEqual({
            note: {},
            isLoading: false,
            error: true,
        });
    });

    it('should handle RESET_STORE', () => {
        let state = initialState;

        state = reducer(state, {
            type: actions.RESET_STORE,
        });

        expect(state).toEqual({
            note: {},
            isLoading: false,
            error: false,
        });
    });
});