import * as React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import { Note as INote } from '../../interfaces';
import { BackToMenuButton } from '../Buttons/BackToMenuButton';
import { SaveNoteButton } from '../Buttons/SaveNoteButton';
import { CancelNoteButton } from '../Buttons/CancelNoteButton';
import { fetchNotes, addNote, deleteNotes, addSelectedNote, removeUnselectedNote, selectAllNotes, unselectAllNotes } from '../../store/actions/notes';
import { connect } from 'react-redux';
import { NoteForm, NoteTitle, NoteText, NoteControlsWrapper, NoteButtonsWrapper } from './style';

interface Props {
    note?: INote,    
    notes: INote[],
    isLoading: Boolean,
    selectedNotes?: string[],
    fetchNotesAction(): Function,
    addNoteAction(notes: INote[]): Function,
    deleteNotesAction(notes: INote[]): Function,
    addSelectedNoteAction(note: INote): Function,
    removeUnselectedNoteAction(note: INote): Function,
    selectAllNotesAction(notes: INote[]): Function,
    unselectAllNotesAction(): Function,
};

interface State {
    title: string,
    text: string,
}

export class Note extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            title: this.props.note ? this.props.note.title : '',
            text: this.props.note ? this.props.note.text : '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(evt: { target: { name: string; value: string; }; }) {
		const { name, value } = evt.target;

        this.setState({
            [name]: value
        } as Pick<State, keyof State>);
    };

    handleSubmit(evt: any) {
        evt.preventDefault();
    };

    render() {
        const { 
            notes,
            addNoteAction 
        } = this.props;

        return (
            <NoteForm onSubmit={this.handleSubmit}>
                <NoteTitle 
                    type="text"
                    name="title"
                    value={this.state.title} 
                    onChange={this.handleChange} 
                    placeholder="Title" 
                    required 
                />
                <NoteText 
                    name="text"
                    value={this.state.text} 
                    onChange={this.handleChange} 
                    placeholder="Text" 
                    required 
                />
                <NoteControlsWrapper>
                    <Link to="/">
                        <BackToMenuButton />
                    </Link>
                    <NoteButtonsWrapper>
                        <SaveNoteButton 
                            noteInfo={this.state}
                            notes={notes}
                            addNote={addNoteAction}
                        />
                        <CancelNoteButton />
                    </NoteButtonsWrapper>
                </NoteControlsWrapper>
            </NoteForm>
        )
    }
};

const mapStateToProps = (store: any) => {
    return {
        notes: store.notes,
        isLoading: store.isLoading,
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchNotesAction: () => dispatch(fetchNotes()),
        addNoteAction: (notes: INote[]) => dispatch(addNote(notes)),
        deleteNotesAction: (notes: INote[]) => dispatch(deleteNotes(notes)),
        addSelectedNoteAction: (note: INote) => dispatch(addSelectedNote(note)),
        removeUnselectedNoteAction: (note: INote) => dispatch(removeUnselectedNote(note)),
        selectAllNotesAction: (notes: INote[]) => dispatch(selectAllNotes(notes)),
        unselectAllNotesAction: () => dispatch(unselectAllNotes()),
    }
};
  
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Note);
