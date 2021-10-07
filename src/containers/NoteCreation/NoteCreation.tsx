import React, { Component } from 'react';
import Note from '../../components/Note';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import { INote } from '../../interfaces';
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
			return <Error navigateToPage={navigateToPageAction}/>;
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
