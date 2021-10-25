import React, { Component } from 'react';
import Note from '../../components/Note';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import { INote } from '../../interfaces';
import { ACTIONS, ROUTES } from '../../constants';

interface Props {
    isLoading: boolean,
    error: boolean,
    addNoteAction(note: INote): Function,
    navigateToPageAction(path: string): Function,
    resetStoreAction(): Function,
};

export default class NoteCreation extends Component<Props> {
    constructor(props: Props) {
        super(props);

        this.handleNavigateToHome = this.handleNavigateToHome.bind(this);
    }
    
    componentWillUnmount() {
        const { resetStoreAction } = this.props;

        resetStoreAction();
    }

    handleNavigateToHome() {
        const { navigateToPageAction } = this.props;

		navigateToPageAction(ROUTES.HOME);
	}

    render() {
        const { 
            isLoading, 
            error,
            addNoteAction,
            navigateToPageAction,
        } = this.props;

        if (error) {
			return <Error navigateToPage={this.handleNavigateToHome}/>;
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
