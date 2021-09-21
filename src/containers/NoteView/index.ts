import { connect } from 'react-redux';
import { 
    fetchNote, 
    updateNote, 
    resetStore,
    navigateToPage,
} from '../../store/actions/notes';
import NoteView from './NoteView';
import { Note } from '../../interfaces';

const mapStateToProps = (store: any) => {
    return {
        isLoading: store.note.isLoading,
        note: store.note.note,
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchNoteAction: (id: string) => dispatch(fetchNote(id)),
        updateNoteAction: (note: Note) => dispatch(updateNote(note)),
        navigateToPageAction: (path: string) => dispatch(navigateToPage(path)),
        resetStoreAction: () => dispatch(resetStore()),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NoteView);