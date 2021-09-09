import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { Note as INote } from '../../interfaces';
import { 
    NoteForm, 
    NoteTitle, 
    NoteText, 
    NoteControlsWrapper, 
    NoteButtonsWrapper 
} from './style';
import Button, { ButtonTypes } from '../Button/Button';
import { ROUTES } from '../../constants';

interface Props {
    typeName: string,
    note?: INote,
    addOrUpdateNote(note: INote): Function,
};

interface State {
    title: string,
    text: string,
};

const ADD_OR_UPDATE_NOTE_FORM = 'addOrUpdateNote';

export default class Note extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            title: '',
            text: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleCancelChanges = this.handleCancelChanges.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };
    
    componentDidMount() {
        this.handleCancelChanges();
    };

    handleChange(evt: { target: { name: string; value: string; }; }) {
		const { name, value } = evt.target;

        this.setState({
            [name]: value
        } as Pick<State, keyof State>);
    };

    handleCheckSaveOrUpdateChanges() {
        const { title, text } = this.state;
        const { note } = this.props;

        return (
            ((title.trim() !== '' && text.trim() !== '') 
            && (title.trim() !== note?.title || text.trim() !== note?.text))
        );
    };

    handleCheckCancelChanges() {
        const { title, text } = this.state;
        const { note } = this.props;

        return (
            ((title.trim() !== note?.title && note?.title) || (text.trim() !== note?.text && note?.text))
            || ((title.trim() !== '' && !note?.title) || (text.trim() !== '' && !note?.text))
        );
    };

    handleCancelChanges() {
        const { note } = this.props;

        this.setState({
            title: note?.title || '',
            text: note?.text || '',
        });
    };

    onSubmit(evt: any) {
        evt.preventDefault();

        const { addOrUpdateNote } = this.props;
        const { title, text } = this.state;

        const note = {                    
            id: this.props.note?.id || uuidv4(),
            title: title.trim(),
            text: text.trim(),
            created_at: this.props.note?.created_at || Date.now(),
            updated_at: Date.now(),
        };

        addOrUpdateNote(note);
    };

    render() {
        const { typeName } = this.props;
        const { title, text } = this.state;

        return (
            <NoteForm onSubmit={this.onSubmit} id={ADD_OR_UPDATE_NOTE_FORM}>
                <NoteTitle 
                    type="text"
                    name="title"
                    value={title} 
                    onChange={this.handleChange} 
                    placeholder="Title" 
                    required 
                />
                <NoteText 
                    name="text"
                    value={text} 
                    onChange={this.handleChange} 
                    placeholder="Text" 
                    required 
                />
                <NoteControlsWrapper>
                    <Link to={ROUTES.HOME}>
                        <Button 
                            type={ButtonTypes.Button}
                            text="Back"
                            color="red"
                        />
                    </Link>
                    <NoteButtonsWrapper>
                        <Button 
                            form={ADD_OR_UPDATE_NOTE_FORM}
                            type={ButtonTypes.Submit}
                            disabled={!this.handleCheckSaveOrUpdateChanges()}
                            text={typeName}
                            color="green"
                        />
                        <Button               
                            type={ButtonTypes.Reset}
                            disabled={!this.handleCheckCancelChanges()}
                            onClick={this.handleCancelChanges}
                            text="Cancel"
                            color="red"
                        />
                    </NoteButtonsWrapper>
                </NoteControlsWrapper>
            </NoteForm>
        )
    }
};
