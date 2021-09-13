import * as React from 'react';
import { 
    LoaderBackground, 
    LoaderContainer, 
    LoaderText 
} from './style';
import loader from '../../images/loader.gif';

export default class Loader extends React.Component {
    render() {
        return (
            <LoaderBackground>
                <LoaderContainer>
                    <img 
                        src={loader} 
                        width={100} 
                        height={100} 
                        alt="Loading" 
                    />
                    <LoaderText>Loading...</LoaderText>
                </LoaderContainer>
            </LoaderBackground>
        )
    }
};
