import { connect } from 'react-redux';
import NoteView from './NoteView';
import { Note } from '../../interfaces';
import { fetchNoteData, updateNoteData } from '../../actionCreators/note';
import { navigateToPage, resetStore } from '../../actionCreators/common';

const mapStateToProps = (store: any) => {
    return {
        isLoading: store.note.isLoading,
        note: store.note.note,
        error: store.note.error,
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchNoteAction: (id: string) => dispatch(fetchNoteData(id)),
        updateNoteAction: (note: Note) => dispatch(updateNoteData(note)),
        navigateToPageAction: (path: string) => dispatch(navigateToPage(path)),
        resetStoreAction: () => dispatch(resetStore()),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NoteView);