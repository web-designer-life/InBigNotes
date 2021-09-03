import * as React from 'react';
import { GlobalStyle } from '../components/Style/GlobalStyle';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import HomeContainer from './HomeContainer';
import NoteCreation from './NoteCreation';
import NoteView from './NoteView';

export default class App extends React.Component {
    render() {
        return (
            <>
                <GlobalStyle />
                <Router>
                    <Switch>
                        <Route path="/Note/create" component={NoteCreation} />
                        <Route path={`/Note/:id`} component={NoteView} />
                        <Route path="/" exact component={HomeContainer} />
                    </Switch>
                </Router>
            </>
        );
    }
};
