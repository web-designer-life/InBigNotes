import * as React from 'react';
import Note from '../../components/Note/Note';
import Loader from '../../components/Loader/Loader';
import { Note as INote } from '../../interfaces';
import { ACTIONS } from '../../constants/types';

interface Props {
    isLoading: boolean,
    redirect: boolean,
    addNoteAction(note: INote): Function,
    redirectAction(): Function,
    resetStoreAction(): Function,
};

export default class NoteCreation extends React.Component<Props> {
    componentWillUnmount() {
        this.props.resetStoreAction();
    }

    render() {
        const { 
            isLoading, 
            redirect,
            addNoteAction,
            redirectAction,
        } = this.props;

        return (
            isLoading ?
            <Loader /> :
            <Note 
                typeName={ACTIONS.SAVE}
                redirect={redirect}
                redirectAction={redirectAction}
                addOrUpdateNote={addNoteAction}
            />
        );
    }
};
