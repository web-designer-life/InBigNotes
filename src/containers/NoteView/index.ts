import { connect } from 'react-redux';
import NoteView from './NoteView';
import { INote } from '../../interfaces';
import { fetchNoteData, updateNoteData } from '../../actionCreators/note';
import { navigateToPage, resetStore } from '../../actionCreators/common';

const mapStateToProps = (store: any) => ({
    isLoading: store.note.isLoading,
    note: store.note.note,
    error: store.note.error,
});

const mapDispatchToProps = (dispatch: any) => ({
    fetchNoteAction: (id: string) => dispatch(fetchNoteData(id)),
    updateNoteAction: (note: INote) => dispatch(updateNoteData(note)),
    navigateToPageAction: (path: string) => dispatch(navigateToPage(path)),
    resetStoreAction: () => dispatch(resetStore()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NoteView);
