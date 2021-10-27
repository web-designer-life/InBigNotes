import React, { FunctionComponent } from 'react';
import NoteComponent from '../NoteComponent';
import List from './style';
import { INote } from '../../interfaces';

interface Props {
    notes: INote[],
    selectedNotes: string[],
    addSelectedNote(note: INote): Function,
    removeUnselectedNote(note: INote): Function,
    navigateToPage(path: string): Function,
};

const ListNotes: FunctionComponent<Props> = ({
    notes,
    selectedNotes,
    addSelectedNote,
    removeUnselectedNote,
    navigateToPage,
}) => {
    const content = (
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

    return content;
};

export default ListNotes;
