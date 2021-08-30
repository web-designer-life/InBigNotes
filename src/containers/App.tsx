import * as React from 'react';
import { GlobalStyle } from '../components/Style/GlobalStyle';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import { connect } from 'react-redux'
import { Home } from '../components/Home/Home';
import NoteCreator from '../components/NoteCreator/NoteCreator';
import { Loader } from '../components/Loader/Loader';
import { fetchNotes, deleteNotes, addSelectedNote, removeUnselectedNote, selectAllNotes, unselectAllNotes } from '../store/actions/notes';
import { Note } from '../interfaces';
import { DeleteNotesButton } from '../components/Buttons/DeleteNotesButton';

import './App.css';

interface Props {
    notes?: Note[],
    isLoading: Boolean,
    selectedNotes?: Number[],
    fetchNotesAction(): Function,
    deleteNotesAction(notes: Note[]): Function,
    addSelectedNoteAction(note: Note): Function,
    removeUnselectedNoteAction(note: Note): Function,
    selectAllNotesAction(notes: Note[]): Function,
    unselectAllNotesAction(): Function,
};

class App extends React.Component<Props> {
    render() {
        const { 
            notes, 
            isLoading, 
            selectedNotes,
            fetchNotesAction,
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
                    <div>
                        <nav>
                            <h1>InBigNotes</h1>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/noteCreator">Create note</Link>
                                </li>
                            </ul>
                            <DeleteNotesButton 
                                notes={notes}
                                selectedNotes={selectedNotes}
                                deleteNotes={deleteNotesAction}
                                unselectAllNotes={unselectAllNotesAction}
                            />
                        </nav>

                        <Switch>
                            <Route path="/NoteCreator">
                                <NoteCreator />
                            </Route>
                            <Route path="/">
                                <Home 
                                    notes={notes} 
                                    selectedNotes={selectedNotes}
                                    fetchNotes={fetchNotesAction} 
                                    addSelectedNote={addSelectedNoteAction} 
                                    removeUnselectedNote={removeUnselectedNoteAction}
                                    selectAllNotes={selectAllNotesAction}
                                    unselectAllNotes={unselectAllNotesAction}
                                />
                            </Route>
                        </Switch>
                    </div>
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
