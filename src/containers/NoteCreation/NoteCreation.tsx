import * as React from 'react';
import Note from '../../components/Note/Note';
import Loader from '../../components/Loader/Loader';
import { Note as INote } from '../../interfaces';

interface Props {
    isLoading: boolean,
    addNoteAction(note: INote): Function,
    resetStoreAction(): Function,
};

export default class NoteCreation extends React.Component<Props> {
    componentWillUnmount() {
        this.props.resetStoreAction();
    }

    render() {
        const { 
            isLoading, 
            addNoteAction,
        } = this.props;

        return (
            isLoading ?
            <Loader /> :
            <Note 
                typeName="Save"
                addOrUpdateNote={addNoteAction}
            />
        );
    }
};
