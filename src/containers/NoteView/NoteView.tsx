import * as React from 'react';
import Note from '../../components/Note/Note';
import Loader from '../../components/Loader/Loader';
import { Note as INote } from '../../interfaces';
import { ACTIONS, ROUTES } from '../../constants';

interface Props {
    match: {
        params: {
            noteId: string,
        }
    },
    note: INote,
    isLoading: boolean,
    fetchNoteAction(id: string): Function,
    updateNoteAction(note: INote): Function,
    navigateToPageAction(path: string): Function,
    resetStoreAction(): Function,
};

export default class NoteView extends React.Component<Props> {
    componentDidMount() {
        this.props.fetchNoteAction(this.props.match.params.noteId);
    };

    componentWillUnmount() {
        this.props.resetStoreAction();
    };

    render() {
        const { 
            note,
            isLoading, 
            updateNoteAction,
            navigateToPageAction,
        } = this.props;

        return (
            isLoading ?
            <Loader /> :
            <Note 
                typeName={ACTIONS.UPDATE}
                note={note}
                navigateToPage={navigateToPageAction}
                addOrUpdateNote={updateNoteAction}
            />
        );
    }
};
