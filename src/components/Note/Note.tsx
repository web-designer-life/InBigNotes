import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Redirect } from 'react-router-dom';
import { Note as INote } from '../../interfaces';
import { 
    NoteForm, 
    NoteTitle, 
    NoteText, 
    NoteControlsWrapper, 
    NoteButtonsWrapper 
} from './style';
import Button from '../Button/Button';
import { ROUTES, BUTTON_TYPES, BUTTON_COLORS } from '../../constants';
import Modal from '../Modal/Modal';

interface Props {
    typeName: string,
    note?: INote,
    redirect: boolean,
    addOrUpdateNote(note: INote): Function,
    redirectAction(): Function,
};

interface State {
    title: string,
    text: string,
    active: boolean,
    action: () => void,
};

const ADD_OR_UPDATE_NOTE_FORM = 'addOrUpdateNote';

export default class Note extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            title: '',
            text: '',
            active: false,
            action: () => {},
        };

        this.renderRedirect = this.renderRedirect.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCancelChanges = this.handleCancelChanges.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleModalBackButtonClick = this.handleModalBackButtonClick.bind(this);
        this.handleModalSubmitButtonClick = this.handleModalSubmitButtonClick.bind(this);
        this.handleModalCancelButtonClick = this.handleModalCancelButtonClick.bind(this);
    };
    
    componentDidMount() {
        this.handleCancelChanges();
    };

    renderRedirect() {
        if (this.props.redirect) {
            return <Redirect to={ROUTES.HOME} />
        }
    };

    handleChange(evt: { target: { name: string; value: any; }; }) {
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

    toggleModal() {
		this.setState({
			active: !this.state.active,
		} as Pick<State, keyof State>);
	};

    handleSetAction(func: Function) {
		this.setState({
			action: func,
		} as Pick<State, keyof State>);
	};

    handleModalBackButtonClick() {
        this.toggleModal();
        this.handleSetAction(this.props.redirectAction);
    };

    handleModalSubmitButtonClick() {
        this.toggleModal();
        this.handleSetAction(this.onSubmit);
    };

    handleModalCancelButtonClick() {
        this.toggleModal();
        this.handleSetAction(this.handleCancelChanges);
    };

    onSubmit() {
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
        const { title, text, active, action } = this.state;

        return (
            <>
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
                        <Button 
                            type={BUTTON_TYPES.Button}
                            text="Back"
                            onClick={
                                this.handleCheckCancelChanges() ? 
                                this.handleModalBackButtonClick : 
                                this.props.redirectAction
                            }
                            color={BUTTON_COLORS.Red}
                        />
                        <NoteButtonsWrapper>
                            <Button 
                                form={ADD_OR_UPDATE_NOTE_FORM}
                                type={BUTTON_TYPES.Button}
                                disabled={!this.handleCheckSaveOrUpdateChanges()}
                                text={typeName}
                                onClick={this.handleModalSubmitButtonClick}
                                color={BUTTON_COLORS.Green}
                            />
                            <Button               
                                type={BUTTON_TYPES.Reset}
                                disabled={!this.handleCheckCancelChanges()}
                                onClick={this.handleModalCancelButtonClick}
                                text="Cancel"
                                color={BUTTON_COLORS.Red}
                            />
                        </NoteButtonsWrapper>
                    </NoteControlsWrapper>
                </NoteForm>
                <Modal active={active} onClose={this.toggleModal} action={action} />
                {this.renderRedirect()}
            </>
        )
    }
};
