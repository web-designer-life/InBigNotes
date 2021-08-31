import * as React from 'react';
import { GlobalStyle } from '../components/Style/GlobalStyle';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { connect } from 'react-redux'
import { Home } from '../components/Home/Home';
import { Note as NotePage} from '../components/Note/Note';
import { Loader } from '../components/Loader/Loader';
import { fetchNotes, addNote, deleteNotes, addSelectedNote, removeUnselectedNote, selectAllNotes, unselectAllNotes } from '../store/actions/notes';
import { Note } from '../interfaces';

interface Props {
    notes: Note[],
    isLoading: Boolean,
    selectedNotes?: string[],
    fetchNotesAction(): Function,
    addNoteAction(notes: Note[]): Function,
    deleteNotesAction(notes: Note[]): Function,
    addSelectedNoteAction(note: Note): Function,
    removeUnselectedNoteAction(note: Note): Function,
    selectAllNotesAction(notes: Note[]): Function,
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
            addNoteAction,
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
                            <NotePage  
                                notes={notes}
                                addNote={addNoteAction}
                            />
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
        addNoteAction: (notes: Note[]) => dispatch(addNote(notes)),
        deleteNotesAction: (notes: Note[]) => dispatch(deleteNotes(notes)),
        addSelectedNoteAction: (note: Note) => dispatch(addSelectedNote(note)),
        removeUnselectedNoteAction: (note: Note) => dispatch(removeUnselectedNote(note)),
        selectAllNotesAction: (notes: Note[]) => dispatch(selectAllNotes(notes)),
        unselectAllNotesAction: () => dispatch(unselectAllNotes()),
    }
};
  
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
