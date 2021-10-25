import { connect } from 'react-redux';
import HomeContainer from './HomeContainer';
import { INote } from '../../interfaces';
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

const mapStateToProps = (store: any) => ({
    notes: store.notes.notes,
    isLoading: store.notes.isLoading,
    selectedNotes: store.notes.selectedNotes,
    filterType: store.notes.filterType,
    error: store.notes.error,
});

const mapDispatchToProps = (dispatch: any) => ({
    fetchNotesAction: (filterType: string) => dispatch(fetchNotesData(filterType)),
    deleteNotesAction: (notes: INote[]) => dispatch(deleteNotesData(notes)),
    addSelectedNoteAction: (note: INote) => dispatch(addSelectedNote(note)),
    removeUnselectedNoteAction: (note: INote) => dispatch(removeUnselectedNote(note)),
    selectAllNotesAction: (notes: INote[]) => dispatch(selectAllNotes(notes)),
    unselectAllNotesAction: () => dispatch(unselectAllNotes()),
    filterAction: (filterType: string) => dispatch(filter(filterType)),
    navigateToPageAction: (path: string) => dispatch(navigateToPage(path)),
    resetStoreAction: () => dispatch(resetStore()),
});
 
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomeContainer);
