import * as React from 'react';
import PropTypes from 'prop-types';
import { Background } from './style';
import loader from '../../../public/images/loader.gif';

interface Props {
    isLoading: Boolean,
};

export class Loader extends React.Component<Props> {
    static propTypes: { 
        isLoading: PropTypes.Validator<boolean>; 
    };

    render() {
        const isLoading = this.props.isLoading;
        
        return (
            isLoading ?
            <Background>
                <img src={loader} width={100} height={100} alt="Loading" />
                Loading...
            </Background> :
            null
        )
    }
};

Loader.propTypes = {
    isLoading: PropTypes.bool.isRequired,
};