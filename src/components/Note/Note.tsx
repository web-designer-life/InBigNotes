import * as React from 'react';
import { Link } from 'react-router-dom';
import { Note as INote } from '../../interfaces';
import { BackToMenuButton } from '../Buttons/BackToMenuButton';
import { SaveNoteButton } from '../Buttons/SaveNoteButton';
import { CancelNoteButton } from '../Buttons/CancelNoteButton';
import { NoteForm, NoteTitle, NoteText, NoteControlsWrapper, NoteButtonsWrapper } from './style';

interface Props {
    note?: INote,
    onSubmit(note: INote): Function,
};

interface State {
    title: string,
    text: string,
};

export default class Note extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            title: '',
            text: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    
    componentDidMount() {
        this.setState({
            title: this.props.note ? this.props.note.title : '',
            text: this.props.note ? this.props.note.text : '',
        });
    };

    handleChange(evt: { target: { name: string; value: string; }; }) {
		const { name, value } = evt.target;

        this.setState({
            [name]: value
        } as Pick<State, keyof State>);
    };

    handleCancelChanges() {
        this.setState({
            title: this.props.note ? this.props.note.title : '',
            text: this.props.note ? this.props.note.text : '',
        });
    }

    handleSubmit(evt: any) {
        evt.preventDefault();

        //
    };

    render() {
        const { 
            note,
            onSubmit,
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
                            note={note}
                            noteInfo={this.state}
                            addOrUpdateNote={onSubmit}
                        />
                        <CancelNoteButton               
                            note={note}
                            noteInfo={this.state}
                            // onClick={this.handleCancelChanges}
                        />
                    </NoteButtonsWrapper>
                </NoteControlsWrapper>
            </NoteForm>
        )
    }
};
