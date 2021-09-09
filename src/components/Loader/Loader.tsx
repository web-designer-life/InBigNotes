import * as React from 'react';
import { 
    Background, 
    LoaderContent, 
    LoaderText 
} from './style';
import loader from '../../images/loader.gif';

export default class Loader extends React.Component {
    render() {
        return (
            <Background>
                <LoaderContent>
                    <img 
                        src={loader} 
                        width={100} 
                        height={100} 
                        alt="Loading" 
                    />
                    <LoaderText>Loading...</LoaderText>
                </LoaderContent>
            </Background>
        )
    }
};
