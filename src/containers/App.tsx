import * as React from 'react';
import { history } from '../store/configureStore';
import { GlobalStyle } from '../globalStyle';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import HomeContainer from './HomeContainer';
import NoteCreation from './NoteCreation';
import NoteView from './NoteView';
import { ROUTES } from '../constants';

export default class App extends React.Component {
    render() {
        return (
            <>
                <GlobalStyle />
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route path={ROUTES.NOTE_CREATE} component={NoteCreation} />
                        <Route path={`${ROUTES.NOTE}/:noteId`} component={NoteView} />
                        <Route path={ROUTES.HOME} exact component={HomeContainer} />
                    </Switch>
                </ConnectedRouter>
            </>
        );
    }
};
