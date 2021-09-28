import React, { Component } from 'react';
import NoteComponent from './NoteComponent';
import { List } from './style';
import { Note } from '../../interfaces';

interface Props {
    notes: Note[],
    selectedNotes?: string[],
    addSelectedNote(note: Note): Function,
    removeUnselectedNote(note: Note): Function,
    navigateToPage(path: string): Function,
};

export class ListNotes extends Component<Props> { 
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
                {notes.map((note: Note) =>(
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
