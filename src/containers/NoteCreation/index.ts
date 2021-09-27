import { connect } from 'react-redux';
import NoteCreation from './NoteCreation';
import { Note } from '../../interfaces';
import { addNoteData } from '../../actionCreators/note';
import { navigateToPage, resetStore } from '../../actionCreators/common';

const mapStateToProps = (store: any) => {
    return {
        isLoading: store.note.isLoading,
        error: store.note.error,
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        addNoteAction: (note: Note) => dispatch(addNoteData(note)),
        navigateToPageAction: (path: string) => dispatch(navigateToPage(path)),
        resetStoreAction: () => dispatch(resetStore()),
    }
};
 
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NoteCreation);
