import React, { Component } from 'react';
import { 
    LoaderBackground, 
    LoaderContainer, 
    LoaderText 
} from './style';
import loader from '../../images/loader.gif';
import { TEXTS } from '../../constants';

export default class Loader extends Component {
    render() {
        return (
            <LoaderBackground>
                <LoaderContainer>
                    <img 
                        src={loader} 
                        width={75} 
                        height={75} 
                        alt={TEXTS.LOADER}
                    />
                    <LoaderText>{TEXTS.LOADER}</LoaderText>
                </LoaderContainer>
            </LoaderBackground>
        )
    }
};
