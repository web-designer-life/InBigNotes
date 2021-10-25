import { 
    put, 
    delay, 
    takeEvery, 
    all, 
} from 'redux-saga/effects';
import notesSaga, { 
    fetchNotes, 
    deleteNotes, 
} from '../../src/sagas/notes';
import { 
    fetchNotesSuccess, 
    fetchNotesFail,
    deleteNotesSuccess, 
    deleteNotesFail,  
} from '../../src/actionCreators/notes';
import actions from '../../src/actions';
import { TEXTS } from '../../src/constants';

const NOTES = [
    {
        id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
        title: 'Army',
        text: 'An army, ground force, or land force is a fighting force that fights primarily on land.',
        created_at: 1632734670806,
        updated_at: 1632735522467,
    },
    {
        id: 'd012a6d2-0d4d-445d-a661-1a2ef4d499e2',
        title: 'Hobby',
        text: 'Hobbies include collecting themed items and objects, engaging in creative and artistic pursuits, playing sports, or pursuing other amusements.',
        created_at: 1632734757657,
        updated_at: 1632734757657,
    },
];

describe('notesSaga sagas', () => {
    afterEach(() => {
        window.localStorage.removeItem(TEXTS.STORAGE_NAME);
    });

    describe('fetchNotes', () => {
        it('Success action with notes, sorted by title', () => {
            window.localStorage.setItem(TEXTS.STORAGE_NAME, JSON.stringify(NOTES));
    
            const generator = fetchNotes({ payload: { filterType: TEXTS.FILTER.NAME.VALUE } });
    
            expect(generator.next().value).toEqual(
                delay(1500)
            );
            expect(generator.next().value).toEqual(
                put(fetchNotesSuccess(NOTES))
            );
        });

        it('Success action without notes', () => {    
            const generator = fetchNotes({ payload: { filterType: TEXTS.FILTER.NAME.VALUE } });
    
            expect(generator.next().value).toEqual(
                delay(1500)
            );
            expect(generator.next().value).toEqual(
                put(fetchNotesSuccess([]))
            );
        });
    
        it('Error action', () => {    
            window.localStorage.setItem(TEXTS.STORAGE_NAME, 'undefined');

            const generator = fetchNotes({ payload: { filterType: TEXTS.FILTER.NAME.VALUE } });
    
            expect(generator.next().value).toEqual(
                delay(1500)
            );
            expect(generator.next().value).toEqual(
                put(fetchNotesFail())
            );
        });
    });

    describe('deleteNotes', () => {
        it('Success action', () => {
            window.localStorage.setItem(TEXTS.STORAGE_NAME, JSON.stringify(NOTES));
    
            const generator = deleteNotes({ payload: { notes: NOTES } });
    
            expect(generator.next().value).toEqual(
                delay(1500)
            );
            expect(generator.next().value).toEqual(
                put(deleteNotesSuccess())
            );
            expect(generator.next().value).toEqual(
                put(fetchNotesSuccess(NOTES))
            );
        });

        it('Error action', () => {        
            const generator = deleteNotes({ payload: {} });
    
            expect(generator.next().value).toEqual(
                delay(1500)
            );
            expect(generator.next().value).toEqual(
                put(deleteNotesFail())
            );
        });
    });
    
    it('notesSaga', () => {
        const saga = notesSaga();

        expect(saga).toEqual(
            all([
                takeEvery(actions.FETCH_NOTES_PENDING, fetchNotes),
                takeEvery(actions.DELETE_NOTES_PENDING, deleteNotes),
            ])
        );
    });
});
