import React, { Component } from 'react';
import Note from '../../components/Note';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import { INote } from '../../interfaces';
import { ACTIONS, ROUTES } from '../../constants';

interface Props {
    match: {
        params: {
            noteId: string,
        }
    };
    note: INote;
    isLoading: boolean;
    error: boolean;
    fetchNoteAction(id: string): Function;
    updateNoteAction(note: INote): Function;
    navigateToPageAction(path: string): Function;
    resetStoreAction(): Function;
};

export default class NoteView extends Component<Props> {
    componentDidMount() {
        const { fetchNoteAction, match } = this.props;

        fetchNoteAction(match.params.noteId);
    }

    componentWillUnmount() {
        const { resetStoreAction } = this.props;

        resetStoreAction();
    }

    handleNavigateToHome = () => {
        const { navigateToPageAction } = this.props;

        navigateToPageAction(ROUTES.HOME);
    }

    render() {
        const {
            note,
            isLoading,
            error,
            updateNoteAction,
            navigateToPageAction,
        } = this.props;

        if (error) {
            return <Error navigateToPage={this.handleNavigateToHome} />;
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
