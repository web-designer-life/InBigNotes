import * as React from 'react';
import { Link } from 'react-router-dom';
import Note from '../../components/Note/Note';
import { Loader } from '../../components/Loader/Loader';
import { Note as INote } from '../../interfaces';

interface Props {
    isLoading: Boolean,
    fetchNotesAction(): Function,
    updateNoteAction(note: INote): Function,
};

export default class NoteView extends React.Component<Props> {
    componentDidMount() {
        this.props.fetchNotesAction()
    }

    render() {
        const { 
            isLoading, 
            updateNoteAction
        } = this.props;

        console.log(this.props)
        return (
            <>
                <Loader isLoading={isLoading}/>
                {/* <Note onSubmit={updateNote}/> */}
            </>
        );
    }
};
