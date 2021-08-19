import * as React from 'react';
import { ListNotes } from '../Notes/ListNotes';
import noteDB from '../../notes.json';

export default class HomeComponent extends React.Component {
    render() {
        return (
            <div>
                {
                    noteDB ? 
                    <ListNotes 
                        notes={noteDB}
                    />
                    : <p>No notes</p>
                }
            </div>
        )
    }
}
