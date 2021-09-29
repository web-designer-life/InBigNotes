import React, { Component } from 'react';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
import Home from '../../components/Home/Home';
import { Note } from '../../interfaces';

interface Props {
    notes?: Note[],
    isLoading: boolean,
    selectedNotes?: string[],
    filter: string,
    error: boolean,
    fetchNotesAction(filter: string): Function,
    deleteNotesAction(notes: Note[]): Function,
    addSelectedNoteAction(note: Note): Function,
    removeUnselectedNoteAction(note: Note): Function,
    selectAllNotesAction(notes: Note[]): Function,
    unselectAllNotesAction(): Function,
    filterAction(filter: string): Function,
    navigateToPageAction(path: string): Function,
    resetStoreAction(): Function,
};

export default class HomeContainer extends Component<Props> {  
    componentDidMount() {
        this.props.fetchNotesAction(this.props.filter);
    };
    
    componentWillUnmount() {
        this.props.resetStoreAction();
    };

    render() {
        const {
            notes,
            isLoading, 
            selectedNotes,
            filter,
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
			return <Error navigateToPage={navigateToPageAction}/>;
		}
        
        return (
            <>
                {   
                    isLoading ?
                    <Loader /> :
                    <Home 
                        notes={notes}
                        selectedNotes={selectedNotes}
                        filter={filter}
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
