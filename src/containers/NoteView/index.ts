import { connect } from 'react-redux';
import { 
    fetchNote, 
    updateNote, 
    resetStore, 
    redirect,
} from '../../store/actions/notes';
import NoteView from './NoteView';
import { Note } from '../../interfaces';

const mapStateToProps = (store: any) => {
    return {
        isLoading: store.note.isLoading,
        note: store.note.note,
        redirect: store.note.redirect,
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchNoteAction: (id: string) => dispatch(fetchNote(id)),
        updateNoteAction: (note: Note) => dispatch(updateNote(note)),
        redirectAction: () => dispatch(redirect()),
        resetStoreAction: () => dispatch(resetStore()),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NoteView);