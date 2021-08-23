import * as React from 'react';
import { connect } from 'react-redux';
import { ListNotes } from '../Notes/ListNotes';
// import noteDB from '../../notes.json';

interface Note {
    id: number, 
    title: string, 
    text: string,
    created_at: string,
    updated_at: string
}

interface Props {
    notes?: Array<Note>
}

let HomeComponent: React.FC<Props> = ({ notes }) => (
    notes ? 
    <ListNotes 
        notes={notes}
    />
    : <p>No notes</p>
)

const mapStateToProps = (state: any) => ({
    notes: state.notes,
});

HomeComponent = connect(mapStateToProps, null)(HomeComponent);
    
export default HomeComponent;
