import { runSaga } from 'redux-saga';
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
import { expectSaga } from 'redux-saga-test-plan';
import { put, call, delay} from 'redux-saga/effects';
import noteReducer, { initialState } from '../../src/reducers/note';
import noteSaga, { 
    fetchNote, 
    addNote, 
    updateNote, 
} from '../../src/sagas/note';
import sagas from '../../src/sagas';

const ID = 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3';
const NOTE = {
    id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
    title: 'Army',
    text: 'An army, ground force, or land force is a fighting force that fights primarily on land.',
    created_at: 1632734670806,
    updated_at: 1632735522467,
};

describe('noteSaga', () => {
    it('fetchNote success action', async () => {   
        // let iterator;

        // beforeAll(() => {
        //     iterator = noteSaga.fetchNote({ payload: { id: ID } });
        // });

        // it('should takeLatest SUBMIT_LOGIN_USER', () => {
        //     const value = iterator.next().value
        //     const expected = delay(1500)
        //     expect(value).toEqual(expected)
        // })

        // it('should be done', () => {
        //     const value = iterator.next().value
        //     const expected = put(fetchNoteSuccess(NOTE))
        //     expect(value).toEqual(expected)
        // })
        
        const generator = fetchNote({ payload: { id: ID } });

        expect(generator.next().value).toEqual(delay(1500));

        expect(generator.next().value).toEqual(
            put(fetchNoteSuccess(NOTE))
        );

        // expect(generator.next().value).toEqual(
        //     put(
        //         {
        //             type: actions.FETCH_NOTE_SUCCESS, 
        //             payload: undefined
        //         }
        //     )
        // );

        // const dispatchedActions: any[] = [];

        // const fakeStore = {
        //     dispatch: (action) => dispatchedActions.push(action),
        // };

        // await runSaga(fakeStore, fetchNote, ID).result();

        // expect(dispatchedActions).toContainEqual(fetchNoteData(ID));
        // expect(dispatchedActions).toContainEqual(fetchNoteSuccess(NOTE));
    });

    // it('fetchNote error action', async () => {
    //     const dispatchedActions: any[] = [];

    //     const fakeStore = {
    //         dispatch: (action) => dispatchedActions.push(action),
    //     };

    //     await runSaga(fakeStore, fetchNote, ID).result();

    //     expect(dispatchedActions).toContainEqual(fetchNoteData(ID));
    //     expect(dispatchedActions).toContainEqual(fetchNoteFail());
    // });
});
