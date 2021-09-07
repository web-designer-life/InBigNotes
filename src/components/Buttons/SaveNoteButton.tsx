import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Note } from '../../interfaces';
import { GreenButton } from './style';

interface Props {
    note?: Note,
    noteInfo: {
        title: string,
        text: string,
    },
    addOrUpdateNote(note: Note): Function,
};

export class SaveNoteButton extends React.Component<Props> {
    render() {
        const { 
            note,
            noteInfo,
            addOrUpdateNote,
        } = this.props;

        return (
            ((noteInfo.title.trim() !== '' && noteInfo.text.trim() !== '') 
            && (noteInfo.title.trim() !== note?.title || noteInfo.text.trim() !== note?.text))?
            <GreenButton 
                onClick={() => {
                    const note = {                    
                        id: uuidv4(),
                        title: noteInfo.title.trim(),
                        text: noteInfo.text.trim(),
                        created_at: Date.now(),
                        updated_at: Date.now(),
                    };

                    addOrUpdateNote(note);
                }}
            >
                Save
            </GreenButton> :
            <GreenButton disabled={true}>Save</GreenButton>
        )
    }
};
