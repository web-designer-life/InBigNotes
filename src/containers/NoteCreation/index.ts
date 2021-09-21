import { connect } from 'react-redux';
import { 
    addNote, 
    navigateToPage, 
    resetStore,
} from '../../store/actions/notes';
import NoteCreation from './NoteCreation';
import { Note } from '../../interfaces';

const mapStateToProps = (store: any) => {
    return {
        isLoading: store.note.isLoading,
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        addNoteAction: (note: Note) => dispatch(addNote(note)),
        navigateToPageAction: (path: string) => dispatch(navigateToPage(path)),
        resetStoreAction: () => dispatch(resetStore()),
    }
};
 
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NoteCreation);
