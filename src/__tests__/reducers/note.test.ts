import noteReducer from '../../reducers/note';
import { initialState } from '../../reducers/note';

describe('noteReducer', () => {
    it('should return the initial state', () => {
        expect(noteReducer(undefined, {})).toEqual({
            error: false,
            isLoading: false,
            note: {},
        });
    });

    it('should handle FETCH_NOTE_PENDING', () => {
        expect(
            noteReducer(initialState, {
                type: 'FETCH_NOTE_PENDING',
                payload: {
                    id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
                },
            }),
        ).toEqual({
            error: false,
            id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
            isLoading: true,
            note: {},
        });
    });

    it('should handle FETCH_NOTE_SUCCESS', () => {
        expect(
            noteReducer(initialState, {
                type: 'FETCH_NOTE_SUCCESS',
                payload: {
                    note: {
                        id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
                        title: 'Army',
                        text: 'An army, ground force, or land force is a fighting force that fights primarily on land.',
                        created_at: 1632734670806,
                        updated_at: 1632735522467
                    },
                },
            }),
        ).toEqual({
            error: false,
            isLoading: false,
            note: {
                created_at: 1632734670806,
                id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
                text: 'An army, ground force, or land force is a fighting force that fights primarily on land.',
                title: 'Army',
                updated_at: 1632735522467,
            },
        });
    });

    it('should handle ADD_NOTE_PENDING', () => {
        expect(
            noteReducer(initialState, {
                type: 'ADD_NOTE_PENDING',
                payload: {
                    note: {
                        id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
                        title: 'Army',
                        text: 'An army, ground force, or land force is a fighting force that fights primarily on land.',
                        created_at: 1632734670806,
                        updated_at: 1632735522467
                    },
                },
            }),
        ).toEqual({
            error: false,
            isLoading: true,
            note: {
                created_at: 1632734670806,
                id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
                text: 'An army, ground force, or land force is a fighting force that fights primarily on land.',
                title: 'Army',
                updated_at: 1632735522467,
            },
        });
    });

    it('should handle ADD_NOTE_SUCCESS', () => {
        expect(
            noteReducer(initialState, {
                type: 'ADD_NOTE_SUCCESS',
            }),
        ).toEqual({
            error: false,
            isLoading: false,
            note: {},
        });
    });

    it('should handle UPDATE_NOTE_PENDING', () => {
        expect(
            noteReducer(initialState, {
                type: 'UPDATE_NOTE_PENDING',
                payload: {
                    note: {
                        id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
                        title: 'Army',
                        text: 'An army, ground force, or land force is a fighting force that fights primarily on land.',
                        created_at: 1632734670806,
                        updated_at: 1632735522467
                    },
                },
            }),
        ).toEqual({
            error: false,
            isLoading: true,
            note: {
                created_at: 1632734670806,
                id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
                text: 'An army, ground force, or land force is a fighting force that fights primarily on land.',
                title: 'Army',
                updated_at: 1632735522467,
            },
        });
    });

    it('should handle UPDATE_NOTE_SUCCESS', () => {
        expect(
            noteReducer(initialState, {
                type: 'UPDATE_NOTE_SUCCESS',
            }),
        ).toEqual({
            error: false,
            isLoading: false,
            note: {},
        });
    });

    it('should handle FETCH_NOTE_FAIL', () => {
        expect(
            noteReducer(initialState, {
                type: 'FETCH_NOTE_FAIL',
            }),
        ).toEqual({
            error: true,
            isLoading: false,
            note: {},
        });
    });

    it('should handle ADD_NOTE_FAIL', () => {
        expect(
            noteReducer(initialState, {
                type: 'ADD_NOTE_FAIL',
            }),
        ).toEqual({
            error: true,
            isLoading: false,
            note: {},
        });
    });

    it('should handle UPDATE_NOTE_FAIL', () => {
        expect(
            noteReducer(initialState, {
                type: 'UPDATE_NOTE_FAIL',
            }),
        ).toEqual({
            error: true,
            isLoading: false,
            note: {},
        });
    });

    it('should handle RESET_STORE', () => {
        expect(
            noteReducer(initialState, {
                type: 'RESET_STORE',
            }),
        ).toEqual({
            error: false,
            isLoading: false,
            note: {},
        });
    });
});