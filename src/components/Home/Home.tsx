import * as React from 'react';
import ControlPanel from '../ControlPanel/ControlPanel';
import { ListNotes } from '../Notes/ListNotes';
import { 
    RouterWrapper, 
    Logo, 
    Wrapper,
} from '../../containers/style';
import Button from '../Button/Button';
import { Note } from '../../interfaces';
import { Link } from 'react-router-dom';
import { EmptyListNotesWrapper, EmptyListNotesText } from './style';
import { 
    ROUTES, 
    BUTTON_TYPES, 
    COLORS, 
    TEXTS, 
} from '../../constants';
import Modal from '../Modal/Modal';

interface Props {
    notes?: Note[],
    selectedNotes?: string[],
    filter: string,
    fetchNotes(filter: string): Function,
    deleteNotes(notes: Note[]): Function,
    addSelectedNote(note: Note): Function,
    removeUnselectedNote(note: Note): Function,
    selectAllNotes(notes: Note[]): Function,
    unselectAllNotes(): Function,
    filterAction(filter: string): Function,
};

interface State {
    modalText: string,
    buttonConfirmText: string,
    buttonCancelText: string,
    active: boolean,
    action: () => void,
}

export default class Home extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            modalText: '',
            buttonConfirmText: '',
            buttonCancelText: '',
            active: false,
            action: () => {},
        };

        this.handleModalBackButtonClick = this.handleModalBackButtonClick.bind(this);
        this.handleDeleteNotes = this.handleDeleteNotes.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
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

        const completeNotes = notes?.filter(
            (note: Note) => !selectedNotes?.some(
                (selectedNote: String) => note.id === selectedNote
            )
        ) || [];

        unselectAllNotes();
        deleteNotes(completeNotes);
    };
    
    render() {
        const { 
            notes, 
            selectedNotes,
            filter,
            fetchNotes,
            addSelectedNote, 
            removeUnselectedNote,
            selectAllNotes,
            unselectAllNotes,
            filterAction,
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
                        <Link to={ROUTES.NOTE_CREATE}>
                            <Button 
                                type={BUTTON_TYPES.BUTTON}
                                disabled={!!selectedNotes?.length}
                                text={TEXTS.BUTTON.CREATE}
                                color={COLORS.BUTTON.GREEN}
                            />
                        </Link>
                        <Button 
                            type={BUTTON_TYPES.BUTTON}
                            disabled={!selectedNotes?.length}
                            onClick={this.handleModalBackButtonClick}
                            text={TEXTS.BUTTON.DELETE}
                            color={COLORS.BUTTON.RED}
                        />
                    </Wrapper>
                </RouterWrapper>
                <ControlPanel 
                    notes={notes}
                    selectedNotes={selectedNotes}
                    filter={filter}
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
                        <Link to={ROUTES.NOTE_CREATE}>
                            <Button 
                                type={BUTTON_TYPES.BUTTON}
                                disabled={!!selectedNotes?.length}
                                text={TEXTS.BUTTON.CREATE}
                                color={COLORS.BUTTON.GREEN}
                            />
                        </Link>
                        <Button
                            type={BUTTON_TYPES.BUTTON}
                            disabled={!selectedNotes?.length}
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
