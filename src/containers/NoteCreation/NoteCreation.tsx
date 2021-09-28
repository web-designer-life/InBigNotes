import React, { Component } from 'react';
import Note from '../../components/Note/Note';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
import { Note as INote } from '../../interfaces';
import { ACTIONS } from '../../constants';

interface Props {
    isLoading: boolean,
    error: boolean,
    addNoteAction(note: INote): Function,
    navigateToPageAction(path: string): Function,
    resetStoreAction(): Function,
};

export default class NoteCreation extends Component<Props> {
    componentWillUnmount() {
        this.props.resetStoreAction();
    };

    render() {
        const { 
            isLoading, 
            error,
            addNoteAction,
            navigateToPageAction,
        } = this.props;

        if (error) {
			return <Error />;
		}

        return (
            isLoading ?
            <Loader /> :
            <Note 
                typeName={ACTIONS.SAVE}
                navigateToPage={navigateToPageAction}
                addOrUpdateNote={addNoteAction}
            />
        );
    }
};
