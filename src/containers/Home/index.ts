import Home from './Home';
import { connect } from 'react-redux';

interface Note {
    id: number, 
    title: string, 
    text: string,
    created_at: string,
    updated_at: string
}

interface State {
    notes: Array<Note>
}

const mapStateToProps = (state: State) => ({notes: state.notes});

export default connect(mapStateToProps)(Home);