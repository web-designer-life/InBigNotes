import { connect } from 'react-redux';
import { 
    fetchNotes, 
    deleteNotes, 
    addSelectedNote, 
    removeUnselectedNote, 
    selectAllNotes, 
    unselectAllNotes, 
    resetStore, 
} from '../../store/actions/notes';
import HomeContainer from './HomeContainer';
import { Note } from '../../interfaces';

const mapStateToProps = (store: any) => {
    return {
        notes: store.notes,
        isLoading: store.isLoading,
        selectedNotes: store.selectedNotes,
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchNotesAction: () => dispatch(fetchNotes()),
        deleteNotesAction: (notes: Note[]) => dispatch(deleteNotes(notes)),
        addSelectedNoteAction: (note: Note) => dispatch(addSelectedNote(note)),
        removeUnselectedNoteAction: (note: Note) => dispatch(removeUnselectedNote(note)),
        selectAllNotesAction: (notes: Note[]) => dispatch(selectAllNotes(notes)),
        unselectAllNotesAction: () => dispatch(unselectAllNotes()),
        resetStoreAction: () => dispatch(resetStore()),
    }
};
 
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomeContainer);
