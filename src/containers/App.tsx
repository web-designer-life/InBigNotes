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
import { fetchNotes } from '../actions/notes';

import './App.css';

interface Note {
    id: number, 
    title: string, 
    text: string,
    created_at: string,
    updated_at: string
};

interface Props {
    notes?: Array<Note>,
    isLoading: Boolean,
    fetchNotesAction(): any,
};

class App extends React.Component<Props> {
    render() {
        const { notes, isLoading, fetchNotesAction } = this.props;

        return (
            <>
                <GlobalStyle />
                <Loader isLoading={isLoading}/>
                <Router>
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/noteCreator">Create note</Link>
                                </li>
                            </ul>
                        </nav>

                        <Switch>
                            <Route path="/NoteCreator">
                                <NoteCreator />
                            </Route>
                            <Route path="/">
                                <Home notes={notes} fetchNotes={fetchNotesAction}/>
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
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchNotesAction: () => dispatch(fetchNotes()),
    }
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);