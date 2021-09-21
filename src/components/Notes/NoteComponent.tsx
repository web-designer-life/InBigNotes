import * as React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import { 
    Note, 
    NoteInfo, 
    Title, 
    Text,
} from './style';
import { Note as INote } from '../../interfaces';
import { ROUTES } from '../../constants';

interface Props {
    note: INote,
    selectedNotes?: string[],
    addSelectedNote(note: INote): Function,
    removeUnselectedNote(note: INote): Function,
};

export default class NoteComponent extends React.Component<Props> { 
    constructor(props: Props) {
        super(props);

        this.handleSelectOrUnselectNote = this.handleSelectOrUnselectNote.bind(this);
    };

    handleSelectOrUnselectNote() {
        const { 
            note, 
            selectedNotes,
            addSelectedNote, 
            removeUnselectedNote,
        } = this.props;

        selectedNotes?.includes(note.id) ?
        removeUnselectedNote(note) :
        addSelectedNote(note)
    };
    
    render() {
        const { 
            note, 
            selectedNotes,
        } = this.props;

        return (
            <Note>
                <NoteInfo>
                    <Title>{note.title}</Title>
                    <Text>{note.text}</Text>
                </NoteInfo>
                <Checkbox
                    checked={!!selectedNotes?.includes(note.id)}
                    onChange={this.handleSelectOrUnselectNote}
                />
            </Note>
        )
    }
};
