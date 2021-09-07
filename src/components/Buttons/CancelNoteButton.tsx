import * as React from 'react';
import { Note } from '../../interfaces';
import { RedButton } from './style';

interface Props {
    note?: Note,
    noteInfo: {
        title: string,
        text: string,
    },
};

export class CancelNoteButton extends React.Component<Props> {
    render() {
        const {
            note,
            noteInfo,
        } = this.props;

        return (
            (((noteInfo.title.trim() !== note?.title && note?.title) || (noteInfo.text.trim() !== note?.text && note?.text))
            || ((noteInfo.title.trim() !== '' && !note?.title) || (noteInfo.text.trim() !== '' && !note?.text))) ?
            <RedButton 
                onClick={() => {
                    
                }}
            >
                Cancel
            </RedButton> :
            <RedButton disabled={true}>Cancel</RedButton>
        )
    }
};
