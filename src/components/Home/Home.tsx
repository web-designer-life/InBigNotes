import * as React from 'react';
import ControlPanel from '../ControlPanel/ControlPanel';
import { ListNotes } from '../Notes/ListNotes';
import { 
    RouterWrapper, 
    Logo, 
    Wrapper 
} from '../../containers/style';
import Button, { ButtonTypes } from '../Button/Button';
import { Note } from '../../interfaces';
import { Link } from 'react-router-dom';
import { EmptyListNotes } from './style';
import { ROUTES } from '../../constants';

interface Props {
    notes?: Note[],
    selectedNotes?: string[],
    deleteNotes(notes: Note[]): Function,
    addSelectedNote(note: Note): Function,
    removeUnselectedNote(note: Note): Function,
    selectAllNotes(notes: Note[]): Function,
    unselectAllNotes(): Function,
};

export default class Home extends React.Component<Props> {
    constructor(props: Props) {
        super(props);

        this.handleDeleteNotes = this.handleDeleteNotes.bind(this);
    };

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
            addSelectedNote, 
            removeUnselectedNote,
            selectAllNotes,
            unselectAllNotes,
        } = this.props;

        return (
            (notes && notes.length !== 0) ? 
            <>
                <RouterWrapper>
                    <Logo>InBigNotes</Logo>
                    <Wrapper>
                        <Link to={ROUTES.NOTE_CREATE}>
                            <Button 
                                type={ButtonTypes.Button}
                                disabled={!!selectedNotes?.length}
                                text="Create"
                                color="green"
                            />
                        </Link>
                        <Button 
                            type={ButtonTypes.Button}
                            disabled={!selectedNotes?.length}
                            onClick={this.handleDeleteNotes}
                            text="Delete"
                            color="red"
                        />
                    </Wrapper>
                </RouterWrapper>
                <ControlPanel 
                    notes={notes}
                    selectedNotes={selectedNotes}
                    selectAllNotes={selectAllNotes}
                    unselectAllNotes={unselectAllNotes}
                />
                <ListNotes 
                    notes={notes}
                    selectedNotes={selectedNotes}
                    addSelectedNote={addSelectedNote}
                    removeUnselectedNote={removeUnselectedNote}
                />
            </>
            :
            <>
                <RouterWrapper>
                    <Logo>InBigNotes</Logo>
                    <Wrapper>
                        <Link to={ROUTES.NOTE_CREATE}>
                            <Button 
                                type={ButtonTypes.Button}
                                disabled={!!selectedNotes?.length}
                                text="Create"
                                color="green"
                            />
                        </Link>
                        <Button
                            type={ButtonTypes.Button}
                            disabled={!selectedNotes?.length}
                            onClick={this.handleDeleteNotes}
                            text="Delete"
                            color="red"
                        />
                    </Wrapper>
                </RouterWrapper>
                <EmptyListNotes>No notes</EmptyListNotes>
            </>
        )
    }
};
