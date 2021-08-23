import * as React from 'react';
import NoteComponent from './NoteComponent';
import { List } from './style';

interface Note {
    id: number, 
    title: string, 
    text: string,
    created_at: string,
    updated_at: string
}

interface Props {
    notes: Array<Note>
}

export const ListNotes: React.FC<Props> = ({ notes }) => (
    <List>
        {notes.map((note: Note) =>(
            <NoteComponent 
                key={note.id}
                note={note}
            />
        ))}
    </List>
);