import * as React from 'react';
import PropTypes from 'prop-types';
import { Background, LoaderContent, LoaderText } from './style';
import loader from '../../images/loader.gif';

interface Props {
    isLoading: Boolean,
};

export class Loader extends React.Component<Props> {
    static propTypes: { 
        isLoading: PropTypes.Validator<boolean>; 
    }

    render() {
        const isLoading = this.props.isLoading;

        isLoading ? 
        document.body.style.overflow = 'hidden' : 
        document.body.style.overflow = 'unset';
        
        return (
            isLoading ?
            <Background>
                <LoaderContent>
                    <img src={loader} width={100} height={100} alt="Loading" />
                    <LoaderText>Loading...</LoaderText>
                </LoaderContent>
            </Background> :
            null
        )
    }
};

Loader.propTypes = {
    isLoading: PropTypes.bool.isRequired,
};