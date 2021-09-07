import * as React from 'react';
import Note from '../../components/Note/Note';
import Loader from '../../components/Loader/Loader';
import { Note as INote } from '../../interfaces';

interface Props {
    match: {
        params: {
            id: string,
        }
    },
    note: INote,
    isLoading: Boolean,
    fetchNoteAction(id: string): Function,
    updateNoteAction(note: INote): Function,
};

export default class NoteView extends React.Component<Props> {
    componentDidMount() {
        this.props.fetchNoteAction(this.props.match.params.id);
    }

    render() {
        const { 
            note,
            isLoading, 
            updateNoteAction,
        } = this.props;

        return (
            isLoading ?
            <Loader /> :
            <Note 
                note={note}
                onSubmit={updateNoteAction}
            />
        );
    }
};
