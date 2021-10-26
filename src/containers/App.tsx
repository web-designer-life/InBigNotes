import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import GlobalStyle from '../globalStyle';
import HomeContainer from './HomeContainer';
import NoteCreation from './NoteCreation';
import NoteView from './NoteView';
import ErrorContainer from './ErrorContainer';
import { ROUTES } from '../constants';

interface Props {
    history: any,
};

export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        
        this.state = {};
    }
      
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
