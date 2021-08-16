import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoteCreator from './Components/NoteCreator/NoteCreator';
  

export default class Container extends React.Component {
    constructor(props) {
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
