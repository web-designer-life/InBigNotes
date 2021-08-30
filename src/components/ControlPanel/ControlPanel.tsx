import * as React from 'react';
import { Note } from '../../interfaces';
import Checkbox from '../Checkbox/Checkbox';
import { Wrapper, SelectAllWrapper, Title } from './style';

interface Props {
    notes?: Note[],
    selectedNotes?: Number[],
    selectAllNotes(notes: Note[]): Function,
    unselectAllNotes(): Function,
}

export default class ControlPanel extends React.Component<Props> {
    render() {
        const { 
            notes, 
            selectedNotes,
            selectAllNotes, 
            unselectAllNotes 
        } = this.props;

        return (
            <Wrapper>
                <p>Sort By</p>
                <SelectAllWrapper>
                    <Title>Select all</Title>
                    <Checkbox
                        checked={
                            selectedNotes?.length === notes?.length
                        }
                        onChange={() => {
                            selectedNotes?.length === notes?.length ?
                            unselectAllNotes() :
                            selectAllNotes(notes || [])
                        }}
                    />
                </SelectAllWrapper>
            </Wrapper>
        )
    }
};
