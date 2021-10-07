import React, { Component } from 'react';
import Note from '../../components/Note';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import { INote } from '../../interfaces';
import { ACTIONS } from '../../constants';

interface Props {
    match: {
        params: {
            noteId: string,
        }
    },
    note: INote,
    isLoading: boolean,
    error: boolean,
    fetchNoteAction(id: string): Function,
    updateNoteAction(note: INote): Function,
    navigateToPageAction(path: string): Function,
    resetStoreAction(): Function,
};

export default class NoteView extends Component<Props> {
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
            error,
            updateNoteAction,
            navigateToPageAction,
        } = this.props;

        if (error) {
			return <Error navigateToPage={navigateToPageAction}/>;
		}

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
