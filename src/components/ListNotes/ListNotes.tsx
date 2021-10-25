import React, { Component } from 'react';
import NoteComponent from '../NoteComponent';
import { List } from './style';
import { INote } from '../../interfaces';

interface Props {
    notes: INote[],
    selectedNotes: string[],
    addSelectedNote(note: INote): Function,
    removeUnselectedNote(note: INote): Function,
    navigateToPage(path: string): Function,
};

export default class ListNotes extends Component<Props> { 
    constructor(props) {
        super(props);
        
        this.state = {};
    }
    
    render() {
        const {
            notes, 
            selectedNotes, 
            addSelectedNote, 
            removeUnselectedNote, 
            navigateToPage,
        } = this.props;
        
        return (
            <List>
                {notes.map((note: INote) => (
                    <NoteComponent 
                        key={note.id}
                        note={note}
                        selectedNotes={selectedNotes}
                        addSelectedNote={addSelectedNote}
                        removeUnselectedNote={removeUnselectedNote}
                        navigateToPage={navigateToPage}
                    />
                ))}
            </List>
        );
    } 
}
