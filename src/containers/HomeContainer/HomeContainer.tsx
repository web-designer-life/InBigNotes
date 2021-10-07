import React, { Component } from 'react';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import Home from '../../components/Home';
import { INote } from '../../interfaces';

interface Props {
    notes?: INote[],
    isLoading: boolean,
    selectedNotes?: string[],
    filter: string,
    error: boolean,
    fetchNotesAction(filter: string): Function,
    deleteNotesAction(notes: INote[]): Function,
    addSelectedNoteAction(note: INote): Function,
    removeUnselectedNoteAction(note: INote): Function,
    selectAllNotesAction(notes: INote[]): Function,
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
