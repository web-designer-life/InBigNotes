import React from 'react';
import { ListItem } from '../Note/ListItem';
import noteDB from '../../notes.json';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                {
                    noteDB ? 
                    <ListItem 
                        itemList={noteDB}
                    />
                    : <p>No notes</p>
                }
            </div>
        )
    }
}
