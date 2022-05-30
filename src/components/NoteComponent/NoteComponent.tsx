import React, { Component } from 'react';
import Checkbox from '../Checkbox';
import {
    Note,
    NoteInfo,
    Title,
    Text,
    DateInfo,
    Appearance,
} from './style';
import { INote } from '../../interfaces';
import { ROUTES } from '../../constants';
import { formatDate } from '../../utils';

interface Props {
    note: INote;
    selectedNotes: string[];
    addSelectedNote(note: INote): Function;
    removeUnselectedNote(note: INote): Function;
    navigateToPage(path: string): Function;
};

export default class NoteComponent extends Component<Props> {
    handleNavigateToNote = () => {
        const { navigateToPage, note } = this.props;

        navigateToPage(`${ROUTES.NOTE}/${note.id}`);
    }

    handleSelectOrUnselectNote = () => {
        const {
            note,
            selectedNotes,
            addSelectedNote,
            removeUnselectedNote,
        } = this.props;

        return selectedNotes.includes(note.id) ?
            removeUnselectedNote(note) :
            addSelectedNote(note);
    }

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
                    <Appearance />
                    <DateInfo>Created: {formatDate(new Date(note.created_at))}</DateInfo>
                    <DateInfo>Modified: {formatDate(new Date(note.updated_at))}</DateInfo>
                </NoteInfo>
                <Checkbox
                    checked={!!selectedNotes.includes(note.id)}
                    onChange={this.handleSelectOrUnselectNote}
                />
            </Note>
        )
    }
};
