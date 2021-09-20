import * as React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import { 
    Note, 
    NoteInfo, 
    Header, 
    Title, 
    Text 
} from './style';
import { Note as INote } from '../../interfaces';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

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
                <Link to={`${ROUTES.NOTE}/${note.id}`}>
                    <NoteInfo>
                        <Header>
                            <Title>{note.title}</Title>
                        </Header>
                        <Text>{note.text}</Text>
                    </NoteInfo>
                </Link>
                <Checkbox
                    checked={!!selectedNotes?.includes(note.id)}
                    onChange={this.handleSelectOrUnselectNote}
                />
            </Note>
        )
    }
};
