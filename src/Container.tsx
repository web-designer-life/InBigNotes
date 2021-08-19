import * as React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './Components/Home/HomeComponent';
import NoteCreator from './Components/NoteCreator/NoteCreator';

interface Props {
}

interface State {
}

export default class Container extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
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
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}
