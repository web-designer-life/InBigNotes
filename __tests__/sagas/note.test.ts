import { 
    takeEvery, 
    all, 
    put, 
    delay, 
} from 'redux-saga/effects';
import { push } from 'connected-react-router';
import noteSaga, { 
    fetchNote, 
    addNote, 
    updateNote, 
} from '../../src/sagas/note';
import { 
    fetchNoteSuccess, 
    fetchNoteFail,
    addNoteSuccess,
    addNoteFail,  
    updateNoteSuccess, 
    updateNoteFail, 
} from '../../src/actionCreators/note';
import actions from '../../src/actions';
import { ROUTES, TEXTS } from '../../src/constants';

const ID = 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3';
const NOTE = {
    id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
    title: 'Army',
    text: 'An army, ground force, or land force is a fighting force that fights primarily on land.',
    created_at: 1632734670806,
    updated_at: 1632735522467,
};
const NOTES = [
    {
        id: 'd012a6d2-0d4d-445d-a661-1a2ef4d499e2',
        title: 'Hobby',
        text: 'Hobbies include collecting themed items and objects, engaging in creative and artistic pursuits, playing sports, or pursuing other amusements.',
        created_at: 1632734757657,
        updated_at: 1632734757657,
    },
    {
        id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
        title: 'Army',
        text: 'An army, ground force, or land force is a fighting force that fights primarily on land.',
        created_at: 1632734670806,
        updated_at: 1632735522467,
    },
];

describe('noteSaga sagas', () => {
    describe('fetchNote', () => {
        it('Success action', () => {
            window.localStorage.setItem(TEXTS.STORAGE_NAME, JSON.stringify(NOTES));
    
            const generator = fetchNote({ payload: { id: ID } });
    
            expect(generator.next().value).toEqual(delay(1500));
            expect(generator.next().value).toEqual(
                put(fetchNoteSuccess(NOTE))
            );
            
            window.localStorage.removeItem(TEXTS.STORAGE_NAME);
        });
    
        it('Error action', () => {    
            const generator = fetchNote({ payload: { id: ID } });
    
            expect(generator.next().value).toEqual(delay(1500));
            expect(generator.next().value).toEqual(
                put(fetchNoteFail())
            );
        });
    });

    describe('addNote', () => {
        it('Success action with note', () => {    
            const generator = addNote({ payload: { note: NOTE } });
            
            expect(generator.next().value).toEqual(
                put(push(ROUTES.HOME))
            );
            expect(generator.next().value).toEqual(delay(1500));
            expect(generator.next().value).toEqual(
                put(addNoteSuccess())
            );
            
            window.localStorage.removeItem(TEXTS.STORAGE_NAME);
        });
    
        it('Error action', () => {    
            const generator = addNote({ payload: {} });

            expect(generator.next().value).toEqual(
                put(push(ROUTES.HOME))
            );
            expect(generator.next().value).toEqual(delay(1500));
            expect(generator.next().value).toEqual(
                put(addNoteFail())
            );
        });
    });

    describe('updateNote', () => {
        it('Success action with notes', () => {    
            window.localStorage.setItem(TEXTS.STORAGE_NAME, JSON.stringify(NOTES));

            const generator = updateNote({ payload: { note: NOTE } });
            
            expect(generator.next().value).toEqual(
                put(push(ROUTES.HOME))
            );
            expect(generator.next().value).toEqual(delay(1500));
            expect(generator.next().value).toEqual(
                put(updateNoteSuccess())
            );
            
            window.localStorage.removeItem(TEXTS.STORAGE_NAME);
        });

        it('Success action without notes', () => {    
            const generator = updateNote({ payload: { note: NOTE } });
            
            expect(generator.next().value).toEqual(
                put(push(ROUTES.HOME))
            );
            expect(generator.next().value).toEqual(delay(1500));
            expect(generator.next().value).toEqual(
                put(updateNoteSuccess())
            );
            
            window.localStorage.removeItem(TEXTS.STORAGE_NAME);
        });
    
        it('Error action', () => {    
            const generator = updateNote({ payload: {} });

            expect(generator.next().value).toEqual(
                put(push(ROUTES.HOME))
            );
            expect(generator.next().value).toEqual(delay(1500));
            expect(generator.next().value).toEqual(
                put(updateNoteFail())
            );
        });
    });

    it('noteSaga', () => {
        const saga = noteSaga();

        expect(saga).toEqual(
            all([
                takeEvery(actions.FETCH_NOTE_PENDING, fetchNote),
                takeEvery(actions.ADD_NOTE_PENDING, addNote),
                takeEvery(actions.UPDATE_NOTE_PENDING, updateNote),
            ])
        );
    });
});
