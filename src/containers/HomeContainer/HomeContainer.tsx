import * as React from 'react';
import Loader from '../../components/Loader/Loader';
import Home from '../../components/Home/Home';
import { Note } from '../../interfaces';

interface Props {
    notes?: Note[],
    isLoading: boolean,
    selectedNotes?: string[],
    fetchNotesAction(): Function,
    deleteNotesAction(notes: Note[]): Function,
    addSelectedNoteAction(note: Note): Function,
    removeUnselectedNoteAction(note: Note): Function,
    selectAllNotesAction(notes: Note[]): Function,
    unselectAllNotesAction(): Function,
    resetStoreAction(): Function,
};

export default class HomeContainer extends React.Component<Props> {  
    componentDidMount() {
        this.props.fetchNotesAction();
    } 
    
    componentWillUnmount() {
        this.props.resetStoreAction();
    } 

    render() {
        const {
            notes,
            isLoading, 
            selectedNotes,
            deleteNotesAction,
            addSelectedNoteAction,
            removeUnselectedNoteAction,
            selectAllNotesAction,
            unselectAllNotesAction,
        } = this.props;
        
        return (
            <>
                {   
                    isLoading ?
                    <Loader /> :
                    <Home 
                        notes={notes}
                        selectedNotes={selectedNotes}
                        deleteNotes={deleteNotesAction}
                        addSelectedNote={addSelectedNoteAction}
                        removeUnselectedNote={removeUnselectedNoteAction}
                        selectAllNotes={selectAllNotesAction}
                        unselectAllNotes={unselectAllNotesAction}
                    />
                }
            </>
        );
    }
};