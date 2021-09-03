import * as React from 'react';
import Note from '../../components/Note/Note';
import Loader from '../../components/Loader/Loader';
import { Note as INote } from '../../interfaces';

interface Props {
    isLoading: Boolean,
    addNoteAction(notes: INote[]): Function,
};

export default class NoteCreation extends React.Component<Props> {
    render() {
        const { 
            isLoading, 
        } = this.props;

        return (
            isLoading ?
            <Loader /> :
            <Note onSubmit={addNoteAction}/>
        );
    }
};
