import * as React from 'react';
import ControlPanel from '../ControlPanel/ControlPanel';
import { ListNotes } from '../Notes/ListNotes';
import { RouterWrapper, Logo, Wrapper } from '../../containers/style';
import { CreateNoteButton } from '../../components/Buttons/CreateNoteButton';
import { DeleteNotesButton } from '../../components/Buttons/DeleteNotesButton';
import { Note } from '../../interfaces';
import { Link } from 'react-router-dom';

interface Props {
    notes?: Note[],
    selectedNotes?: string[],
    deleteNotes(notes: Note[]): Function,
    addSelectedNote(note: Note): Function,
    removeUnselectedNote(note: Note): Function,
    selectAllNotes(notes: Note[]): Function,
    unselectAllNotes(): Function
};

export default class Home extends React.Component<Props> {
    render() {
        const { 
            notes, 
            selectedNotes,
            addSelectedNote, 
            removeUnselectedNote,
            selectAllNotes,
            unselectAllNotes,
            deleteNotes
        } = this.props;

        return (
            (notes && notes.length !== 0) ? 
            <>
                <RouterWrapper>
                    <Logo>InBigNotes</Logo>
                    <Wrapper>
                        <Link to="/note/create">
                            <CreateNoteButton
                                selectedNotes={selectedNotes}
                            />
                        </Link>
                        <DeleteNotesButton 
                            notes={notes}
                            selectedNotes={selectedNotes}
                            deleteNotes={deleteNotes}
                            unselectAllNotes={unselectAllNotes}
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
                        <Link to="/note/create">
                            <CreateNoteButton
                                selectedNotes={selectedNotes}
                            />
                        </Link>
                        <DeleteNotesButton 
                            notes={notes}
                            selectedNotes={selectedNotes}
                            deleteNotes={deleteNotes}
                            unselectAllNotes={unselectAllNotes}
                        />
                    </Wrapper>
                </RouterWrapper>
                <p>No notes</p>
            </>
        )
    }
};
