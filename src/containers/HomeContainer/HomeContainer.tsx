import React, { Component } from 'react';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import Home from '../../components/Home';
import { INote } from '../../interfaces';
import { ROUTES } from '../../constants';

interface Props {
    notes: INote[];
    isLoading: boolean;
    selectedNotes: string[];
    filterType: string;
    error: boolean;
    fetchNotesAction(filterType: string): Function;
    deleteNotesAction(notes: INote[]): Function;
    addSelectedNoteAction(note: INote): Function;
    removeUnselectedNoteAction(note: INote): Function;
    selectAllNotesAction(notes: INote[]): Function;
    unselectAllNotesAction(): Function;
    filterAction(filterType: string): Function;
    navigateToPageAction(path: string): Function;
    resetStoreAction(): Function;
};

export default class HomeContainer extends Component<Props> {
    componentDidMount() {
        const { fetchNotesAction, filterType } = this.props;

        fetchNotesAction(filterType);
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
            notes,
            isLoading,
            selectedNotes,
            filterType,
            error,
            fetchNotesAction,
            deleteNotesAction,
            addSelectedNoteAction,
            removeUnselectedNoteAction,
            selectAllNotesAction,
            unselectAllNotesAction,
            filterAction,
            navigateToPageAction,
        } = this.props;

        if (error) {
            return <Error navigateToPage={this.handleNavigateToHome} />;
        }

        return (
            <>
                {
                    isLoading ?
                        <Loader /> :
                        <Home
                            notes={notes}
                            selectedNotes={selectedNotes}
                            filterType={filterType}
                            fetchNotes={fetchNotesAction}
                            deleteNotes={deleteNotesAction}
                            addSelectedNote={addSelectedNoteAction}
                            removeUnselectedNote={removeUnselectedNoteAction}
                            selectAllNotes={selectAllNotesAction}
                            unselectAllNotes={unselectAllNotesAction}
                            navigateToPage={navigateToPageAction}
                            filterAction={filterAction}
                        />
                }
            </>
        );
    }
};
