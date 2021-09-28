import React, { Component } from 'react';
import { Note } from '../../interfaces';
import Checkbox from '../Checkbox/Checkbox';
import Filter from '../Filter/Filter';
import { 
    Wrapper, 
    SelectAllWrapper, 
    Title,
} from './style';

interface Props {
    notes?: Note[],
    selectedNotes?: string[],
    filter: string,
    fetchNotes(filter: string): Function,
    selectAllNotes(notes: Note[]): Function,
    unselectAllNotes(): Function,
    filterAction(filter: string): Function,
}

export default class ControlPanel extends Component<Props> {
    constructor(props: Props) {
        super(props);

        this.handleSelectOrUnselectNotes = this.handleSelectOrUnselectNotes.bind(this);
    };

    handleSelectOrUnselectNotes() {
        const { 
            notes, 
            selectedNotes,
            selectAllNotes, 
            unselectAllNotes,
        } = this.props;

        selectedNotes?.length === notes?.length ?
        unselectAllNotes() :
        selectAllNotes(notes || [])
    };

    render() {
        const { 
            notes, 
            selectedNotes,
            filter,
            fetchNotes,
            filterAction,
        } = this.props;

        return (
            <Wrapper>
                <Filter 
                    filter={filter}
                    fetchNotes={fetchNotes}
                    filterAction={filterAction}
                />
                <SelectAllWrapper>
                    <Title>Select all {selectedNotes?.length ? `(${selectedNotes?.length})` : ''}</Title>
                    <Checkbox
                        checked={selectedNotes?.length === notes?.length}
                        onChange={this.handleSelectOrUnselectNotes}
                    />
                </SelectAllWrapper>
            </Wrapper>
        )
    }
};
