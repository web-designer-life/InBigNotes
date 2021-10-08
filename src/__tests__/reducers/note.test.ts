import reducer from '../../reducers/note';
import { initialState } from '../../reducers/note';

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
            type: 'FETCH_NOTE_PENDING',
            payload: {
                id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
            },
        });

        expect(state).toEqual({
            note: {},
            isLoading: true,
            id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
            error: false,
        });
    });

    it('should handle FETCH_NOTE_SUCCESS', () => {
        let state = initialState;

        state = reducer(state, {
            type: 'FETCH_NOTE_SUCCESS',
            payload: {
                note: {
                    id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
                    title: 'Army',
                    text: 'An army, ground force, or land force is a fighting force that fights primarily on land.',
                    created_at: 1632734670806,
                    updated_at: 1632735522467,
                },
            },
        });

        expect(state).toEqual({
            note: {
                created_at: 1632734670806,
                id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
                text: 'An army, ground force, or land force is a fighting force that fights primarily on land.',
                title: 'Army',
                updated_at: 1632735522467,
            },
            isLoading: false,
            error: false,
        });
    });

    it('should handle ADD_NOTE_PENDING', () => {
        let state = initialState;

        state = reducer(state, {
            type: 'ADD_NOTE_PENDING',
            payload: {
                note: {
                    id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
                    title: 'Army',
                    text: 'An army, ground force, or land force is a fighting force that fights primarily on land.',
                    created_at: 1632734670806,
                    updated_at: 1632735522467,
                },
            },
        });

        expect(state).toEqual({
            note: {
                created_at: 1632734670806,
                id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
                text: 'An army, ground force, or land force is a fighting force that fights primarily on land.',
                title: 'Army',
                updated_at: 1632735522467,
            },
            isLoading: true,
            error: false,
        });
    });

    it('should handle ADD_NOTE_SUCCESS', () => {
        let state = initialState;

        state = reducer(state, {
            type: 'ADD_NOTE_SUCCESS',
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
            type: 'UPDATE_NOTE_PENDING',
            payload: {
                note: {
                    id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
                    title: 'Army',
                    text: 'An army, ground force, or land force is a fighting force that fights primarily on land.',
                    created_at: 1632734670806,
                    updated_at: 1632735522467,
                },
            },
        });

        expect(state).toEqual({
            note: {
                created_at: 1632734670806,
                id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
                text: 'An army, ground force, or land force is a fighting force that fights primarily on land.',
                title: 'Army',
                updated_at: 1632735522467,
            },
            isLoading: true,
            error: false,
        });
    });

    it('should handle UPDATE_NOTE_SUCCESS', () => {
        let state = initialState;

        state = reducer(state, {
            type: 'UPDATE_NOTE_SUCCESS',
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
            type: 'FETCH_NOTE_FAIL',
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
            type: 'ADD_NOTE_FAIL',
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
            type: 'UPDATE_NOTE_FAIL',
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
            type: 'RESET_STORE',
        });

        expect(state).toEqual({
            note: {},
            isLoading: false,
            error: false,
        });
    });
});