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
    navigateToPage(path: string): Function,
};

export default class NoteComponent extends React.Component<Props> { 
    constructor(props: Props) {
        super(props);

        this.handleNavigateToNote = this.handleNavigateToNote.bind(this);
        this.handleSelectOrUnselectNote = this.handleSelectOrUnselectNote.bind(this);
    };

    handleNavigateToNote() {
		this.props.navigateToPage(`${ROUTES.NOTE}/${this.props.note.id}`);
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
                <NoteInfo onClick={this.handleNavigateToNote}>
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
