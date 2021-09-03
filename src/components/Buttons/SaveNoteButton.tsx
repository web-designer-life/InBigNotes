import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Note } from '../../interfaces';
import { GreenButton } from './style';

interface Props {
    noteInfo: {
        title: string,
        text: string
    },
    addOrUpdateNote(note: Note): Function
};

export class SaveNoteButton extends React.Component<Props> {
    render() {
        const { 
            noteInfo,
            notes,
            addNote
        } = this.props;

        return (
            (noteInfo.title.trim() !== '' && noteInfo.text.trim() !== '') ?
            <GreenButton 
                onClick={() => {
                    const note = {                    
                        id: uuidv4(),
                        title: noteInfo.title.trim(),
                        text: noteInfo.text.trim(),
                        created_at: Date.now(),
                        updated_at: Date.now()
                    };

                    const completeNotes = notes.slice();
                    completeNotes.push(note);

                    addNote(completeNotes);
                }}
            >
                Save
            </GreenButton> :
            <GreenButton disabled={true}>Save</GreenButton>
        )
    }
};
