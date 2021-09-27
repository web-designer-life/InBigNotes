import { connect } from 'react-redux';
import HomeContainer from './HomeContainer';
import { Note } from '../../interfaces';
import { 
    addSelectedNote, 
    deleteNotesData, 
    fetchNotesData, 
    filter, 
    removeUnselectedNote, 
    selectAllNotes, 
    unselectAllNotes,
} from '../../actionCreators/notes';
import { navigateToPage, resetStore } from '../../actionCreators/common';

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
