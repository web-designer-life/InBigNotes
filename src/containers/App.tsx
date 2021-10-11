import React, { Component } from 'react';
import { GlobalStyle } from '../globalStyle';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import HomeContainer from './HomeContainer';
import NoteCreation from './NoteCreation';
import NoteView from './NoteView';
import ErrorContainer from './ErrorContainer';
import { ROUTES } from '../constants';

interface Props {
    history: any,
};

export default class App extends Component<Props> {
    render() {
        const { history } = this.props;

        return (
            <>
                <GlobalStyle />
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route path={ROUTES.NOTE_CREATE} component={NoteCreation} />
                        <Route path={`${ROUTES.NOTE}/:noteId`} component={NoteView} />
                        <Route path={ROUTES.HOME} exact component={HomeContainer} />
                        <Route component={ErrorContainer} />
                    </Switch>
                </ConnectedRouter>
            </>
        );
    }
};
