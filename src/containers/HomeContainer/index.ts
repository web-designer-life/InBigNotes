import { connect } from 'react-redux';
import { 
    fetchNotes, 
    deleteNotes, 
    addSelectedNote, 
    removeUnselectedNote, 
    selectAllNotes, 
    unselectAllNotes,
    filter, 
    resetStore, 
} from '../../store/actions/notes';
import HomeContainer from './HomeContainer';
import { Note } from '../../interfaces';

const mapStateToProps = (store: any) => {
    return {
        notes: store.notes,
        isLoading: store.isLoading,
        selectedNotes: store.selectedNotes,
        filter: store.filter,
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchNotesAction: (filter: string) => dispatch(fetchNotes(filter)),
        deleteNotesAction: (notes: Note[]) => dispatch(deleteNotes(notes)),
        addSelectedNoteAction: (note: Note) => dispatch(addSelectedNote(note)),
        removeUnselectedNoteAction: (note: Note) => dispatch(removeUnselectedNote(note)),
        selectAllNotesAction: (notes: Note[]) => dispatch(selectAllNotes(notes)),
        unselectAllNotesAction: () => dispatch(unselectAllNotes()),
        filterAction: (filterValue: string) => dispatch(filter(filterValue)),
        resetStoreAction: () => dispatch(resetStore()),
    }
};
 
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomeContainer);
