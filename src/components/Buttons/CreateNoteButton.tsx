import * as React from 'react';
import { GreenButton } from './style';

interface Props {
    selectedNotes?: string[],
};

export class CreateNoteButton extends React.Component<Props> {
    render() {
        const { 
            selectedNotes,
        } = this.props;

        return (
            !selectedNotes?.length ?
            <GreenButton>Create</GreenButton> :
            <GreenButton disabled={true}>Create</GreenButton> 
        )
    }
};
