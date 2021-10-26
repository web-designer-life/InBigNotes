import React, { Component } from 'react';
import ControlPanel from '../ControlPanel';
import ListNotes from '../ListNotes';
import Button from '../Button';
import Modal from '../Modal';
import { INote } from '../../interfaces';
import {
    RouterWrapper,
    Logo,
    Wrapper,
} from '../../containers/style';
import { EmptyListNotesWrapper, EmptyListNotesText } from './style';
import {
    ROUTES,
    BUTTON_TYPES,
    COLORS,
    TEXTS,
} from '../../constants';

interface Props {
    notes: INote[],
    selectedNotes: string[],
    filterType: string,
    fetchNotes(filterType: string): Function,
    deleteNotes(notes: INote[]): Function,
    addSelectedNote(note: INote): Function,
    removeUnselectedNote(note: INote): Function,
    selectAllNotes(notes: INote[]): Function,
    unselectAllNotes(): Function,
    filterAction(filterType: string): Function,
    navigateToPage(path: string): Function,
};

interface State {
    modalText: string,
    buttonConfirmText: string,
    buttonCancelText: string,
    active: boolean,
    action: () => void,
};

export default class Home extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            modalText: '',
            buttonConfirmText: '',
            buttonCancelText: '',
            active: false,
            action: () => { },
        };

        this.handleNavigateToNoteCreator = this.handleNavigateToNoteCreator.bind(this);
        this.handleModalBackButtonClick = this.handleModalBackButtonClick.bind(this);
        this.handleDeleteNotes = this.handleDeleteNotes.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    handleNavigateToNoteCreator() {
        const { navigateToPage } = this.props;

        navigateToPage(ROUTES.NOTE_CREATE);
    }

    handleSetAction(func: Function) {
        this.setState({
            action: func,
        } as Pick<State, keyof State>);
    }

    handleModalBackButtonClick() {
        this.setState({
            modalText: TEXTS.MODAL.DELETE,
            buttonConfirmText: TEXTS.BUTTON.DELETE,
            buttonCancelText: TEXTS.BUTTON.CANCEL,
        } as Pick<State, keyof State>);

        this.handleSetAction(this.handleDeleteNotes);
        this.toggleModal();
    }

    handleDeleteNotes() {
        const {
            notes,
            selectedNotes,
            unselectAllNotes,
            deleteNotes,
        } = this.props;

        const completeNotes = notes.filter(
            (note: INote) => !selectedNotes.some(
                (selectedNote: String) => note.id === selectedNote
            )
        ) || [];

        unselectAllNotes();
        deleteNotes(completeNotes);
    }

    toggleModal() {
        const { active } = this.state;

        this.setState({
            active: !active,
        } as Pick<State, keyof State>);
    }

    render() {
        const {
            notes,
            selectedNotes,
            filterType,
            fetchNotes,
            addSelectedNote,
            removeUnselectedNote,
            selectAllNotes,
            unselectAllNotes,
            filterAction,
            navigateToPage,
        } = this.props;

        const {
            modalText,
            buttonConfirmText,
            buttonCancelText,
            active,
            action,
        } = this.state;

        return (
            (notes && notes.length !== 0) ?
                <>
                    <RouterWrapper>
                        <Logo>{TEXTS.PROJECT_NAME}</Logo>
                        <Wrapper>
                            <Button
                                type={BUTTON_TYPES.BUTTON}
                                disabled={!!selectedNotes.length}
                                onClick={this.handleNavigateToNoteCreator}
                                text={TEXTS.BUTTON.CREATE}
                                color={COLORS.BUTTON.GREEN}
                            />
                            <Button
                                type={BUTTON_TYPES.BUTTON}
                                disabled={!selectedNotes.length}
                                onClick={this.handleModalBackButtonClick}
                                text={TEXTS.BUTTON.DELETE}
                                color={COLORS.BUTTON.RED}
                            />
                        </Wrapper>
                    </RouterWrapper>
                    <ControlPanel
                        notes={notes}
                        selectedNotes={selectedNotes}
                        filterType={filterType}
                        fetchNotes={fetchNotes}
                        selectAllNotes={selectAllNotes}
                        unselectAllNotes={unselectAllNotes}
                        filterAction={filterAction}
                    />
                    <ListNotes
                        notes={notes}
                        selectedNotes={selectedNotes}
                        addSelectedNote={addSelectedNote}
                        removeUnselectedNote={removeUnselectedNote}
                        navigateToPage={navigateToPage}
                    />
                    <Modal
                        modalText={modalText}
                        buttonConfirmText={buttonConfirmText}
                        buttonCancelText={buttonCancelText}
                        active={active}
                        onClose={this.toggleModal}
                        action={action}
                    />
                </>
                :
                <>
                    <RouterWrapper>
                        <Logo>{TEXTS.PROJECT_NAME}</Logo>
                        <Wrapper>
                            <Button
                                type={BUTTON_TYPES.BUTTON}
                                disabled={!!selectedNotes.length}
                                onClick={this.handleNavigateToNoteCreator}
                                text={TEXTS.BUTTON.CREATE}
                                color={COLORS.BUTTON.GREEN}
                            />
                            <Button
                                type={BUTTON_TYPES.BUTTON}
                                disabled={!selectedNotes.length}
                                onClick={this.handleModalBackButtonClick}
                                text={TEXTS.BUTTON.DELETE}
                                color={COLORS.BUTTON.RED}
                            />
                        </Wrapper>
                    </RouterWrapper>
                    <EmptyListNotesWrapper>
                        <EmptyListNotesText>{TEXTS.EMPTY_STORAGE_DATA}</EmptyListNotesText>
                    </EmptyListNotesWrapper>
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
