import {
    fetchNotesData,
    fetchNotesSuccess,
    fetchNotesFail,
    deleteNotesData,
    deleteNotesSuccess,
    deleteNotesFail,
    addSelectedNote,
    removeUnselectedNote,
    selectAllNotes,
    unselectAllNotes,
    filter,
} from '../../src/actionCreators/notes';
import actions from '../../src/actions';
import { TEXTS } from '../../src/constants';

const NOTE = {
    id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
    title: 'Army',
    text: 'An army, ground force, or land force is a fighting force that fights primarily on land.',
    created_at: 1632734670806,
    updated_at: 1632735522467,
};

describe('Note actionCreators', () => {
    it('fetchNotesData', () => {
        const fetchNotesDataActionCreator = fetchNotesData(TEXTS.FILTER.NAME.VALUE);

        expect(fetchNotesDataActionCreator).toEqual({
            type: actions.FETCH_NOTES_PENDING,
            payload: {
                filterType: TEXTS.FILTER.NAME.VALUE,
            },
        });
    });

    it('fetchNotesSuccess', () => {
        const fetchNotesSuccessActionCreator = fetchNotesSuccess([NOTE]);

        expect(fetchNotesSuccessActionCreator).toEqual({
            type: actions.FETCH_NOTES_SUCCESS,
            payload: {
                notes: [
                    NOTE,
                ],
            },
        });
    });

    it('fetchNotesFail', () => {
        const fetchNotesFailActionCreator = fetchNotesFail();

        expect(fetchNotesFailActionCreator).toEqual({
            type: actions.FETCH_NOTES_FAIL,
        });
    });

    it('deleteNotesData', () => {
        const deleteNotesDataActionCreator = deleteNotesData([NOTE]);

        expect(deleteNotesDataActionCreator).toEqual({
            type: actions.DELETE_NOTES_PENDING,
            payload: {
                notes: [
                    NOTE,
                ],
            },
        });
    });

    it('deleteNotesSuccess', () => {
        const deleteNotesSuccessActionCreator = deleteNotesSuccess();

        expect(deleteNotesSuccessActionCreator).toEqual({
            type: actions.DELETE_NOTES_SUCCESS,
        });
    });

    it('deleteNotesFail', () => {
        const deleteNotesFailActionCreator = deleteNotesFail();

        expect(deleteNotesFailActionCreator).toEqual({
            type: actions.DELETE_NOTES_FAIL,
        });
    });

    it('addSelectedNote', () => {
        const addSelectedNoteActionCreator = addSelectedNote(NOTE);

        expect(addSelectedNoteActionCreator).toEqual({
            type: actions.ADD_SELECTED_NOTE,
            payload: {
                note: NOTE,
            },
        });
    });

    it('removeUnselectedNote', () => {
        const removeUnselectedNoteActionCreator = removeUnselectedNote(NOTE);

        expect(removeUnselectedNoteActionCreator).toEqual({
            type: actions.REMOVE_UNSELECTED_NOTE,
            payload: {
                note: NOTE,
            },
        });
    });

    it('selectAllNotes', () => {
        const selectAllNotesActionCreator = selectAllNotes([NOTE]);

        expect(selectAllNotesActionCreator).toEqual({
            type: actions.SELECT_ALL_NOTES,
            payload: {
                notes: [
                    NOTE,
                ],
            },
        });
    });

    it('unselectAllNotes', () => {
        const unselectAllNotesActionCreator = unselectAllNotes();

        expect(unselectAllNotesActionCreator).toEqual({
            type: actions.UNSELECT_ALL_NOTES,
        });
    });

    it('filter', () => {
        const filterActionCreator = filter(TEXTS.FILTER.NAME.VALUE);

        expect(filterActionCreator).toEqual({
            type: actions.FILTER,
            payload: {
                filterType: TEXTS.FILTER.NAME.VALUE,
            },
        });
    });
});
