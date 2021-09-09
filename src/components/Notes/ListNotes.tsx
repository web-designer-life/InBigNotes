import * as React from 'react';
import NoteComponent from './NoteComponent';
import { List } from './style';
import { Note } from '../../interfaces';

interface Props {
    notes: Note[],
    selectedNotes?: string[],
    addSelectedNote(note: Note): Function,
    removeUnselectedNote(note: Note): Function,
};

export const ListNotes: React.FC<Props> = ({ 
    notes, 
    selectedNotes, 
    addSelectedNote, 
    removeUnselectedNote, 
}) => (
    <List>
        {notes.map((note: Note) =>(
            <NoteComponent 
                key={note.id}
                note={note}
                selectedNotes={selectedNotes}
                addSelectedNote={addSelectedNote}
                removeUnselectedNote={removeUnselectedNote}
            />
        ))}
    </List>
);
