import { connect } from 'react-redux';
import ErrorContainer from './ErrorContainer';
import { navigateToPage } from '../../actionCreators/common';

const mapDispatchToProps = (dispatch: any) => {
    return {
        navigateToPageAction: (path: string) => dispatch(navigateToPage(path)),
    }
};
 
export default connect(
    null,
    mapDispatchToProps,
)(ErrorContainer);
