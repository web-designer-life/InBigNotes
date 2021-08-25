import * as React from 'react';
import PropTypes from 'prop-types';
import { ListNotes } from '../Notes/ListNotes';

interface Note {
    id: number, 
    title: string, 
    text: string,
    created_at: string,
    updated_at: string,
};

interface Props {
    notes?: Array<Note>,
    fetchNotes(): any,
};

export class Home extends React.Component<Props> {
    static propTypes: { 
        notes: PropTypes.Validator<any[]>; 
        fetchNotes: PropTypes.Validator<(...args: any[]) => any>; 
    };

    onBtnClick = () => {
        this.props.fetchNotes();
    }

    render() {
        const notes = this.props.notes;
        
        return (
            <>
            {
                (notes && notes.length !== 0) ? 
                <ListNotes 
                    notes={notes}
                />: 
                <p>No notes</p>
            }

                <button onClick={this.onBtnClick}>Add notes</button>
            </>
        )
    }
};

Home.propTypes = {
    notes: PropTypes.array.isRequired,
    fetchNotes: PropTypes.func.isRequired,
};