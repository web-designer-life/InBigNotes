import * as React from 'react';
import Note from '../../components/Note/Note';
import Loader from '../../components/Loader/Loader';
import { Note as INote } from '../../interfaces';

interface Props {
    isLoading: Boolean,
    fetchNoteAction(id: string): Function,
    updateNoteAction(note: INote): Function,
};

export default class NoteView extends React.Component<Props> {
    render() {
        const { 
            isLoading, 
            updateNoteAction
        } = this.props;

        return (
            isLoading ?
            <Loader /> :
            <Note 
                fetchNote={fetchNoteAction}
                onSubmit={updateNoteAction}
            />
        );
    }
};
