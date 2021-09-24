import { connect } from 'react-redux';
import { 
    resetStore,
    navigateToPage,
    fetchNoteData,
    updateNoteData,
} from '../../actions/notes';
import NoteView from './NoteView';
import { Note } from '../../interfaces';

const mapStateToProps = (store: any) => {
    return {
        isLoading: store.note.isLoading,
        note: store.note.note,
        error: store.note.error,
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchNoteAction: (id: string) => dispatch(fetchNoteData(id)),
        updateNoteAction: (note: Note) => dispatch(updateNoteData(note)),
        navigateToPageAction: (path: string) => dispatch(navigateToPage(path)),
        resetStoreAction: () => dispatch(resetStore()),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NoteView);