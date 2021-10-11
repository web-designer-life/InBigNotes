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
} from '../../actionCreators/note';
import { 
    fetchNote, 
    addNote, 
    updateNote, 
} from '../../sagas/note';

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
        const dispatchedActions: any[] = [];

        const fakeStore = {
            dispatch: (action) => dispatchedActions.push(action),
        };

        await runSaga(fakeStore, fetchNote, ID).result();

        expect(dispatchedActions).toContainEqual(fetchNoteData(ID));
        expect(dispatchedActions).toContainEqual(fetchNoteSuccess(NOTE));
    });

    it('fetchNote error action', async () => {
        const dispatchedActions: any[] = [];

        const fakeStore = {
            dispatch: (action) => dispatchedActions.push(action),
        };

        await runSaga(fakeStore, fetchNote, ID).result();

        expect(dispatchedActions).toContainEqual(fetchNoteData(ID));
        expect(dispatchedActions).toContainEqual(fetchNoteFail());
    });
});
