import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import BUTTON_TYPES from '../Button/types';
import Button from '../Button';
import Modal from '../Modal';
import {
    ROUTES,
    COLORS,
    TEXTS,
    FORMS,
} from '../../constants';
import {
    NoteForm,
    NoteTitle,
    NoteText,
    NoteControlsWrapper,
    NoteButtonsWrapper,
} from './style';
import { INote } from '../../interfaces';

interface Props {
    typeName: string;
    note?: INote;
    addOrUpdateNote(note: INote): Function;
    navigateToPage(path: string): Function;
};

interface State {
    title: string;
    text: string;
    modalText: string;
    buttonConfirmText: string;
    buttonCancelText: string;
    active: boolean;
    action: () => void;
};

export default class Note extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            title: '',
            text: '',
            modalText: '',
            buttonConfirmText: '',
            buttonCancelText: '',
            active: false,
            action: () => { },
        };
    }

    componentDidMount() {
        this.handleCancelChanges();
    }

    handleNavigateToHome = () => {
        const { navigateToPage } = this.props;

        navigateToPage(ROUTES.HOME);
    }

    handleChange = (evt: { target: { name: string; value: unknown | string; }; }) => {
        const { name, value } = evt.target;

        this.setState({
            [name]: value
        } as Pick<State, keyof State>);
    }

    handleCheckSaveOrUpdateChanges = () => {
        const { title, text } = this.state;
        const { note } = this.props;

        return (
            ((title.trim() !== '' && text.trim() !== '')
                && (title.trim() !== note?.title || text.trim() !== note?.text))
        );
    }

    handleCheckCancelChanges = () => {
        const { title, text } = this.state;
        const { note } = this.props;

        return (
            ((title.trim() !== note?.title && note?.title) || (text.trim() !== note?.text && note?.text))
            || ((title.trim() !== '' && !note?.title) || (text.trim() !== '' && !note?.text))
        );
    }

    handleCheckButtonAction = () => (
        this.handleCheckCancelChanges() ?
            this.handleModalBackButtonClick() :
            this.handleNavigateToHome()
    )

    handleCancelChanges = () => {
        const { note } = this.props;

        this.setState({
            title: note?.title || '',
            text: note?.text || '',
        });
    }

    handleSetAction = (func: () => void) => {
        this.setState({
            action: func,
        } as Pick<State, keyof State>);
    }

    handleModalBackButtonClick = () => {
        this.setState({
            modalText: TEXTS.MODAL.BACK,
            buttonConfirmText: TEXTS.BUTTON.BACK,
            buttonCancelText: TEXTS.BUTTON.CANCEL,
        } as Pick<State, keyof State>);

        this.handleSetAction(this.handleNavigateToHome);
        this.toggleModal();
    }

    handleModalSubmitButtonClick = () => {
        const { typeName } = this.props;

        this.setState({
            modalText: typeName === TEXTS.BUTTON.SAVE ? TEXTS.MODAL.SAVE : TEXTS.MODAL.UPDATE,
            buttonConfirmText: typeName,
            buttonCancelText: TEXTS.BUTTON.CANCEL,
        } as Pick<State, keyof State>);

        this.handleSetAction(this.onSubmit);
        this.toggleModal();
    }

    handleModalCancelButtonClick = () => {
        this.setState({
            modalText: TEXTS.MODAL.CANCEL,
            buttonConfirmText: TEXTS.BUTTON.CONFIRM,
            buttonCancelText: TEXTS.BUTTON.CANCEL,
        } as Pick<State, keyof State>);

        this.handleSetAction(this.handleCancelChanges);
        this.toggleModal();
    }

    onSubmit = () => {
        const { addOrUpdateNote, note } = this.props;
        const { title, text } = this.state;

        const completeNote = {
            id: note?.id || uuidv4(),
            title: title.trim(),
            text: text.trim(),
            created_at: note?.created_at || Date.now(),
            updated_at: Date.now(),
        };

        addOrUpdateNote(completeNote);
    }

    toggleModal = () => {
        const { active } = this.state;

        this.setState({
            active: !active,
        } as Pick<State, keyof State>);
    }

    render() {
        const { typeName } = this.props;
        const {
            title,
            text,
            modalText,
            buttonConfirmText,
            buttonCancelText,
            active,
            action,
        } = this.state;

        return (
            <>
                <NoteForm onSubmit={this.onSubmit} id={FORMS.ADD_OR_UPDATE_NOTE_FORM}>
                    <NoteTitle
                        type={TEXTS.INPUT_FIELD.TYPE.TEXT}
                        name={TEXTS.INPUT_FIELD.NAME.TITLE}
                        value={title}
                        onChange={this.handleChange}
                        placeholder={TEXTS.INPUT_FIELD.PLACEHOLDER.TITLE}
                        required
                    />
                    <NoteText
                        name={TEXTS.INPUT_FIELD.NAME.TEXT}
                        value={text}
                        onChange={this.handleChange}
                        placeholder={TEXTS.INPUT_FIELD.PLACEHOLDER.TEXT}
                        required
                    />
                    <NoteControlsWrapper>
                        <Button
                            type={BUTTON_TYPES.BUTTON}
                            disabled={false}
                            text={TEXTS.BUTTON.BACK}
                            onClick={this.handleCheckButtonAction}
                            color={COLORS.BUTTON.RED}
                        />
                        <NoteButtonsWrapper>
                            <Button
                                type={BUTTON_TYPES.BUTTON}
                                disabled={!this.handleCheckSaveOrUpdateChanges()}
                                text={typeName}
                                onClick={this.handleModalSubmitButtonClick}
                                color={COLORS.BUTTON.GREEN}
                            />
                            <Button
                                type={BUTTON_TYPES.RESET}
                                disabled={!this.handleCheckCancelChanges()}
                                onClick={this.handleModalCancelButtonClick}
                                text={TEXTS.BUTTON.CANCEL}
                                color={COLORS.BUTTON.RED}
                            />
                        </NoteButtonsWrapper>
                    </NoteControlsWrapper>
                </NoteForm>
                <Modal
                    modalText={modalText}
                    buttonConfirmText={buttonConfirmText}
                    buttonCancelText={buttonCancelText}
                    active={active}
                    onClose={this.toggleModal}
                    action={action}
                />
            </>
        )
    }
};
