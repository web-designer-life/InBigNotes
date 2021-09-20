import * as React from 'react';
import { GlobalStyle } from '../globalStyle';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import HomeContainer from './HomeContainer';
import NoteCreation from './NoteCreation';
import NoteView from './NoteView';
import { ROUTES } from '../constants/routes';

export default class App extends React.Component {
    render() {
        return (
            <>
                <GlobalStyle />
                <Router>
                    <Switch>
                        <Route path={ROUTES.NOTE_CREATE} component={NoteCreation} />
                        <Route path={`${ROUTES.NOTE}/:noteId`} component={NoteView} />
                        <Route path={ROUTES.HOME} exact component={HomeContainer} />
                    </Switch>
                </Router>
            </>
        );
    }
};
