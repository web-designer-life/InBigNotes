import * as React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import { Note, Header, Title, Text } from './style';
import { Note as INote } from '../../interfaces';

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
                <Header>
                    <Title>{note.title}</Title>
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
                </Header>
                <Text>{note.text}</Text>
            </Note>
        )
    }
};
