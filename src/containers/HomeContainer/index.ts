import { connect } from 'react-redux';
import { 
    addSelectedNote, 
    removeUnselectedNote, 
    selectAllNotes, 
    unselectAllNotes,
    filter, 
    navigateToPage, 
    resetStore,
    fetchNotesData,
    deleteNotesData,
} from '../../actions/notes';
import HomeContainer from './HomeContainer';
import { Note } from '../../interfaces';

const mapStateToProps = (store: any) => {
    return {
        notes: store.notes.notes,
        isLoading: store.notes.isLoading,
        selectedNotes: store.notes.selectedNotes,
        filter: store.notes.filter,
        error: store.notes.error,
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchNotesAction: (filter: string) => dispatch(fetchNotesData(filter)),
        deleteNotesAction: (notes: Note[]) => dispatch(deleteNotesData(notes)),
        addSelectedNoteAction: (note: Note) => dispatch(addSelectedNote(note)),
        removeUnselectedNoteAction: (note: Note) => dispatch(removeUnselectedNote(note)),
        selectAllNotesAction: (notes: Note[]) => dispatch(selectAllNotes(notes)),
        unselectAllNotesAction: () => dispatch(unselectAllNotes()),
        filterAction: (filterValue: string) => dispatch(filter(filterValue)),
        navigateToPageAction: (path: string) => dispatch(navigateToPage(path)),
        resetStoreAction: () => dispatch(resetStore()),
    }
};
 
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomeContainer);
