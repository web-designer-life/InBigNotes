import * as React from 'react';
import { Link } from 'react-router-dom';
import Note from '../../components/Note/Note';
import { Loader } from '../../components/Loader/Loader';
import { fetchNotes, addNote, deleteNotes, addSelectedNote, removeUnselectedNote, selectAllNotes, unselectAllNotes } from '../../store/actions/notes';
import { Note as INote } from '../../interfaces';

interface Props {
    isLoading: Boolean,
    addNoteAction(notes: INote[]): Function,
};

export default class NoteCreation extends React.Component<Props> {
    componentDidMount() {
        this.props.fetchNotesAction();
    }

    render() {
        const { 
            isLoading, 
        } = this.props;

        return (
            <>
                <Loader isLoading={isLoading}/>
                <Note />
            </>
        );
    }
};
