import * as React from 'react';
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
    selectAllNotes(notes: Note[]): Function,
    unselectAllNotes(): Function,
}

export default class ControlPanel extends React.Component<Props> {
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
        } = this.props;

        return (
            <Wrapper>
                <Filter />
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
