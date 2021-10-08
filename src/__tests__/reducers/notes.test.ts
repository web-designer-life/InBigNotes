import reducer from '../../reducers/notes';
import { initialState } from '../../reducers/notes';
import { TEXTS } from '../../constants';

describe('reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            notes: [],
            isLoading: false,
            selectedNotes: [],
            filter: TEXTS.FILTER.NAME.VALUE,
            error: false,
        });
    });

    it('should handle FETCH_NOTES_PENDING', () => {
        let state = initialState;

        state = reducer(state, {
            type: 'FETCH_NOTES_PENDING',
        });

        expect(state).toEqual({
            notes: [],
            isLoading: true,
            selectedNotes: [],
            filter: TEXTS.FILTER.NAME.VALUE,
            error: false,
        });
    });

    it('should handle FETCH_NOTES_SUCCESS', () => {
        let state = initialState;

        state = reducer(state, {
            type: 'FETCH_NOTES_SUCCESS',
            payload: {
                notes: [
                    {
                        id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
                        title: 'Army',
                        text: 'An army, ground force, or land force is a fighting force that fights primarily on land.',
                        created_at: 1632734670806,
                        updated_at: 1632735522467,
                    },
                ],
            }
        });

        expect(state).toEqual({
            notes: [
                {
                    id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
                    title: 'Army',
                    text: 'An army, ground force, or land force is a fighting force that fights primarily on land.',
                    created_at: 1632734670806,
                    updated_at: 1632735522467,
                },
            ],
            isLoading: false,
            selectedNotes: [],
            filter: TEXTS.FILTER.NAME.VALUE,
            error: false,
        });
    });

    it('should handle DELETE_NOTES_PENDING', () => {
        let state = initialState;

        state = reducer(state, {
            type: 'DELETE_NOTES_PENDING',
            payload: {
                notes: [
                    {
                        id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
                        title: 'Army',
                        text: 'An army, ground force, or land force is a fighting force that fights primarily on land.',
                        created_at: 1632734670806,
                        updated_at: 1632735522467,
                    },
                ],
            },
        });

        expect(state).toEqual({
            notes: [
                {
                    id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
                    title: 'Army',
                    text: 'An army, ground force, or land force is a fighting force that fights primarily on land.',
                    created_at: 1632734670806,
                    updated_at: 1632735522467,
                },
            ],
            isLoading: true,
            selectedNotes: [],
            filter: TEXTS.FILTER.NAME.VALUE,
            error: false,
        });
    });

    it('should handle DELETE_NOTES_SUCCESS', () => {
        let state = initialState;

        state = reducer(state, {
            type: 'DELETE_NOTES_SUCCESS',
        });

        expect(state).toEqual({
            notes: [],
            isLoading: false,
            selectedNotes: [],
            filter: TEXTS.FILTER.NAME.VALUE,
            error: false,
        });
    });

    it('should handle ADD_SELECTED_NOTE', () => {
        let state = initialState;

        state = reducer(state, {
            type: 'ADD_SELECTED_NOTE',
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
            notes: [],
            isLoading: false,
            selectedNotes: [
                'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
            ],
            filter: TEXTS.FILTER.NAME.VALUE,
            error: false,
        });
    });

    it('should handle REMOVE_UNSELECTED_NOTE', () => {
        let state = {
            notes: [],
            isLoading: false,
            selectedNotes: [
                'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
            ],
            filter: TEXTS.FILTER.NAME.VALUE,
            error: false,
        };

        state = reducer(state, {
            type: 'REMOVE_UNSELECTED_NOTE',
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
            notes: [],
            isLoading: false,
            selectedNotes: [],
            filter: TEXTS.FILTER.NAME.VALUE,
            error: false,
        });
    });

    it('should handle SELECT_ALL_NOTES', () => {
        let state = initialState;

        state = reducer(state, {
            type: 'SELECT_ALL_NOTES',
            payload: {
                notes: [
                    {
                        id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
                        title: 'Army',
                        text: 'An army, ground force, or land force is a fighting force that fights primarily on land.',
                        created_at: 1632734670806,
                        updated_at: 1632735522467,
                    },
                ],
            },
        });

        expect(state).toEqual({
            notes: [],
            isLoading: false,
            selectedNotes: [
                'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
            ],
            filter: TEXTS.FILTER.NAME.VALUE,
            error: false,
        });
    });

    it('should handle UNSELECT_ALL_NOTES', () => {
        let state = initialState;

        state = reducer(state, {
            type: 'UNSELECT_ALL_NOTES',
        });

        expect(state).toEqual({
            notes: [],
            isLoading: false,
            selectedNotes: [],
            filter: TEXTS.FILTER.NAME.VALUE,
            error: false,
        });
    });

    it('should handle FILTER', () => {
        let state = initialState;

        state = reducer(state, {
            type: 'FILTER',
            payload: {
                filter: TEXTS.FILTER.DATE_CREATED.VALUE,
            },
        });

        expect(state).toEqual({
            notes: [],
            isLoading: false,
            selectedNotes: [],
            filter: TEXTS.FILTER.DATE_CREATED.VALUE,
            error: false,
        });
    });

    it('should handle FETCH_NOTES_FAIL', () => {
        let state = initialState;

        state = reducer(state, {
            type: 'FETCH_NOTES_FAIL',
        });

        expect(state).toEqual({
            notes: [],
            isLoading: false,
            selectedNotes: [],
            filter: TEXTS.FILTER.NAME.VALUE,
            error: true,
        });
    });

    it('should handle DELETE_NOTES_FAIL', () => {
        let state = initialState;

        state = reducer(state, {
            type: 'DELETE_NOTES_FAIL',
        });

        expect(state).toEqual({
            notes: [],
            isLoading: false,
            selectedNotes: [],
            filter: TEXTS.FILTER.NAME.VALUE,
            error: true,
        });
    });

    it('should handle RESET_STORE', () => {
        let state = initialState;

        state = reducer(state, {
            type: 'RESET_STORE',
        });

        expect(state).toEqual({
            notes: [],
            isLoading: false,
            selectedNotes: [],
            filter: TEXTS.FILTER.NAME.VALUE,
            error: false,
        });
    });
});