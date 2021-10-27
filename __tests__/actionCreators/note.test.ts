import {
    fetchNoteData,
    fetchNoteSuccess,
    fetchNoteFail,
    addNoteData,
    addNoteSuccess,
    addNoteFail,
    updateNoteData,
    updateNoteSuccess,
    updateNoteFail,
} from '../../src/actionCreators/note';
import actions from '../../src/actions';

const ID = 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3';
const NOTE = {
    id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
    title: 'Army',
    text: 'An army, ground force, or land force is a fighting force that fights primarily on land.',
    created_at: 1632734670806,
    updated_at: 1632735522467,
};

describe('Note actionCreators', () => {
    it('fetchNoteData', () => {
        const fetchNoteDataActionCreator = fetchNoteData(ID);

        expect(fetchNoteDataActionCreator).toEqual({
            type: actions.FETCH_NOTE_PENDING,
            payload: {
                id: ID,
            },
        });
    });

    it('fetchNoteSuccess', () => {
        const fetchNoteSuccessActionCreator = fetchNoteSuccess(NOTE);

        expect(fetchNoteSuccessActionCreator).toEqual({
            type: actions.FETCH_NOTE_SUCCESS,
            payload: {
                note: NOTE,
            },
        });
    });

    it('fetchNoteFail', () => {
        const fetchNoteFailActionCreator = fetchNoteFail();

        expect(fetchNoteFailActionCreator).toEqual({
            type: actions.FETCH_NOTE_FAIL,
        });
    });

    it('addNoteData', () => {
        const addNoteDataActionCreator = addNoteData(NOTE);

        expect(addNoteDataActionCreator).toEqual({
            type: actions.ADD_NOTE_PENDING,
            payload: {
                note: NOTE,
            },
        });
    });

    it('addNoteSuccess', () => {
        const addNoteSuccessActionCreator = addNoteSuccess();

        expect(addNoteSuccessActionCreator).toEqual({
            type: actions.ADD_NOTE_SUCCESS,
        });
    });

    it('addNoteFail', () => {
        const addNoteFailActionCreator = addNoteFail();

        expect(addNoteFailActionCreator).toEqual({
            type: actions.ADD_NOTE_FAIL,
        });
    });

    it('updateNoteData', () => {
        const updateNoteDataActionCreator = updateNoteData(NOTE);

        expect(updateNoteDataActionCreator).toEqual({
            type: actions.UPDATE_NOTE_PENDING,
            payload: {
                note: NOTE,
            },
        });
    });

    it('updateNoteSuccess', () => {
        const updateNoteSuccessActionCreator = updateNoteSuccess();

        expect(updateNoteSuccessActionCreator).toEqual({
            type: actions.UPDATE_NOTE_SUCCESS,
        });
    });

    it('updateNoteFail', () => {
        const updateNoteFailActionCreator = updateNoteFail();

        expect(updateNoteFailActionCreator).toEqual({
            type: actions.UPDATE_NOTE_FAIL,
        });
    });
});
