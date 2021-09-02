import * as React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import { Note, NoteInfo, Header, Title, Text } from './style';
import { Note as INote } from '../../interfaces';
import { Link } from 'react-router-dom';

interface Props {
    note: INote,
    selectedNotes?: string[],
    addSelectedNote(note: INote): Function,
    removeUnselectedNote(note: INote): Function,
};

export default class NoteComponent extends React.Component<Props> {
    render() {
        const { 
            note, 
            selectedNotes,
            addSelectedNote, 
            removeUnselectedNote 
        } = this.props;

        return (
            <Note>
                <NoteInfo>
                    <Link 
                        to={`note/${note.id}`}
                    >
                        <Header>
                            <Title>{note.title}</Title>
                        </Header>
                        <Text>{note.text}</Text>
                    </Link>
                </NoteInfo>
                <Checkbox
                    checked={
                        !!selectedNotes?.includes(note.id)
                    }
                    onChange={() => {
                        selectedNotes?.includes(note.id) ?
                        removeUnselectedNote(note) :
                        addSelectedNote(note)
                    }}
                />
            </Note>
        )
    }
};
