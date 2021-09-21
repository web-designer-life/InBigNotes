import { connect } from 'react-redux';
import { addNote, resetStore, redirect } from '../../store/actions/notes';
import NoteCreation from './NoteCreation';
import { Note } from '../../interfaces';

const mapStateToProps = (store: any) => {
    return {
        isLoading: store.note.isLoading,
        redirect: store.note.redirect,
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        addNoteAction: (note: Note) => dispatch(addNote(note)),
        redirectAction: () => dispatch(redirect()),
        resetStoreAction: () => dispatch(resetStore()),
    }
};
 
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NoteCreation);
