import * as React from 'react';
import { GlobalStyle } from '../components/Style/GlobalStyle';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { Home } from '../components/Home/Home';
import Note from '../components/Note/Note';
import { Loader } from '../components/Loader/Loader';
import { fetchNotes, addNote, deleteNotes, addSelectedNote, removeUnselectedNote, selectAllNotes, unselectAllNotes } from '../store/actions/notes';
import { Note as INote } from '../interfaces';

interface Props {
    notes: INote[],
    isLoading: Boolean,
    selectedNotes?: string[],
    fetchNotesAction(): Function,
    addNoteAction(notes: INote[]): Function,
    deleteNotesAction(notes: INote[]): Function,
    addSelectedNoteAction(note: INote): Function,
    removeUnselectedNoteAction(note: INote): Function,
    selectAllNotesAction(notes: INote[]): Function,
    unselectAllNotesAction(): Function,
};

class App extends React.Component<Props> {
    componentDidMount() {
        this.props.fetchNotesAction();
    }

    render() {
        const { 
            notes, 
            isLoading, 
            selectedNotes,
            //addNoteAction,
            deleteNotesAction, 
            addSelectedNoteAction, 
            removeUnselectedNoteAction,
            selectAllNotesAction,
            unselectAllNotesAction,
        } = this.props;

        return (
            <>
                <GlobalStyle />
                <Loader isLoading={isLoading}/>
                <Router>
                    <Switch>
                        <Route path="/Note">
                            <Note />
                        </Route>
                        <Route path={`/Note/:id`}>
                            <Note />
                        </Route>
                        <Route path="/" exact>
                            <Home 
                                notes={notes} 
                                selectedNotes={selectedNotes}
                                addSelectedNote={addSelectedNoteAction} 
                                removeUnselectedNote={removeUnselectedNoteAction}
                                selectAllNotes={selectAllNotesAction}
                                unselectAllNotes={unselectAllNotesAction}
                                deleteNotes={deleteNotesAction}
                            />
                        </Route>
                    </Switch>
                </Router>
            </>
        );
    }
};

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
        addNoteAction: (notes: INote[]) => dispatch(addNote(notes)),
        deleteNotesAction: (notes: INote[]) => dispatch(deleteNotes(notes)),
        addSelectedNoteAction: (note: INote) => dispatch(addSelectedNote(note)),
        removeUnselectedNoteAction: (note: INote) => dispatch(removeUnselectedNote(note)),
        selectAllNotesAction: (notes: INote[]) => dispatch(selectAllNotes(notes)),
        unselectAllNotesAction: () => dispatch(unselectAllNotes()),
    }
};
  
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
