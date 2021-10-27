import React, { FunctionComponent } from 'react';
import {
    LoaderBackground,
    LoaderContainer,
    LoaderText,
} from './style';
import loader from '../../images/loader.gif';
import { TEXTS } from '../../constants';

const Loader: FunctionComponent = () => {
    const content = (
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
    );

    return content;
};

export default Loader;
