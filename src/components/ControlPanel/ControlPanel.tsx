import React, { Component } from 'react';
import { INote } from '../../interfaces';
import Checkbox from '../Checkbox';
import Filter from '../Filter';
import {
    Wrapper,
    SelectAllWrapper,
    Title,
} from './style';

interface Props {
    notes: INote[],
    selectedNotes: string[],
    filterType: string,
    fetchNotes(filterType: string): Function,
    selectAllNotes(notes: INote[]): Function,
    unselectAllNotes(): Function,
    filterAction(filterType: string): Function,
}

export default class ControlPanel extends Component<Props> {
    handleSelectOrUnselectNotes = () => {
        const {
            notes,
            selectedNotes,
            selectAllNotes,
            unselectAllNotes,
        } = this.props;

        return selectedNotes.length === notes.length ?
            unselectAllNotes() :
            selectAllNotes(notes);
    }

    render() {
        const {
            notes,
            selectedNotes,
            filterType,
            fetchNotes,
            filterAction,
        } = this.props;

        return (
            <Wrapper>
                <Filter
                    filterType={filterType}
                    fetchNotes={fetchNotes}
                    filterAction={filterAction}
                />
                <SelectAllWrapper>
                    <Title>Select all {selectedNotes.length ? `(${selectedNotes.length})` : ''}</Title>
                    <Checkbox
                        checked={selectedNotes.length === notes.length}
                        onChange={this.handleSelectOrUnselectNotes}
                    />
                </SelectAllWrapper>
            </Wrapper>
        )
    }
};
