import Home from './Home';
import { connect } from 'react-redux';

const mapStateToProps = (state: any) => ({notes: state.notes});

export default connect(mapStateToProps)(Home)