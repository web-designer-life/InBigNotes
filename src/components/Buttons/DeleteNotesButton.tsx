import * as React from 'react';
import { Note } from '../../interfaces';
import { RedButton } from './style';

interface Props {
    notes?: Note[],
    selectedNotes?: Number[],
    deleteNotes(notes: Note[]): Function,
    unselectAllNotes(): Function,
};

export class DeleteNotesButton extends React.Component<Props> {
    render() {
        const { 
            notes,
            selectedNotes, 
            deleteNotes,
            unselectAllNotes,
        } = this.props;

        return (
            selectedNotes?.length ?
            <RedButton 
                onClick={() => {
                    const completeNotes = notes?.filter((note: Note) => !selectedNotes?.some((selectedNote: Number) => note.id === selectedNote)) || [];

                    unselectAllNotes();

                    deleteNotes(completeNotes);
                }}
            >
                Delete
            </RedButton> :
            <RedButton disabled={true}>Delete</RedButton> 
        )
    }
};
