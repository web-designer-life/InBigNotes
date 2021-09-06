import { connect } from 'react-redux';
import { fetchNote, updateNote } from '../../store/actions/notes';
import NoteView from './NoteView';
import { Note } from '../../interfaces';

const mapStateToProps = (store: any) => {
    return {
        isLoading: store.isLoading,
        note: store.note,
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchNoteAction: (id: string) => dispatch(fetchNote(id)),
        updateNoteAction: (note: Note) => dispatch(updateNote(note)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NoteView);