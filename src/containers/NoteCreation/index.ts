import { connect } from 'react-redux';
import { addNote, resetStore } from '../../store/actions/notes';
import NoteCreation from './NoteCreation';
import { Note } from '../../interfaces';

const mapStateToProps = (store: any) => {
    return {
        notes: store.notes,
        isLoading: store.isLoading,
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        addNoteAction: (note: Note) => dispatch(addNote(note)),
        resetStoreAction: () => dispatch(resetStore()),
    }
};
 
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NoteCreation);
