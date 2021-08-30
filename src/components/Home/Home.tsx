import * as React from 'react';
import ControlPanel from '../ControlPanel/ControlPanel';
import { ListNotes } from '../Notes/ListNotes';
import { Note } from '../../interfaces';

interface Props {
    notes?: Note[],
    selectedNotes?: Number[],
    fetchNotes(): Function,
    addSelectedNote(note: Note): Function,
    removeUnselectedNote(note: Note): Function,
    selectAllNotes(notes: Note[]): Function,
    unselectAllNotes(): Function,
};

export class Home extends React.Component<Props> {
    componentDidMount() {
        this.props.fetchNotes();
    }

    render() {
        const { 
            notes, 
            selectedNotes,
            addSelectedNote, 
            removeUnselectedNote,
            selectAllNotes,
            unselectAllNotes, 
        } = this.props;

        return (
            (notes && notes.length !== 0) ? 
            <>
                <ControlPanel 
                    notes={notes}
                    selectedNotes={selectedNotes}
                    selectAllNotes={selectAllNotes}
                    unselectAllNotes={unselectAllNotes}
                />
                <ListNotes 
                    notes={notes}
                    selectedNotes={selectedNotes}
                    addSelectedNote={addSelectedNote}
                    removeUnselectedNote={removeUnselectedNote}
                />
            </>
            :
            null
        )
    }
};
