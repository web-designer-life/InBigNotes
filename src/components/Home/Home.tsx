import * as React from 'react';
import PropTypes from 'prop-types';
import ControlPanel from '../ControlPanel/ControlPanel';
import { ListNotes } from '../Notes/ListNotes';
import { Note } from '../../interfaces';

interface Props {
    notes?: Array<Note>,
    fetchNotes(): any,
};

export class Home extends React.Component<Props> {
    static propTypes: { 
        notes: PropTypes.Validator<any[]>; 
        fetchNotes: PropTypes.Validator<(...args: any[]) => any>; 
    }

    componentDidMount() {
        this.props.fetchNotes();
    }

    render() {
        const notes = this.props.notes;
        
        return (
            (notes && notes.length !== 0) ? 
            <>
                <ControlPanel />
                <ListNotes 
                    notes={notes}
                />
            </>
            : 
            <p>No notes</p>
        )
    }
};

Home.propTypes = {
    notes: PropTypes.array.isRequired,
    fetchNotes: PropTypes.func.isRequired,
};
