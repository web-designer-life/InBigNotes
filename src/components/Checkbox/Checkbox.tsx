import React from 'react';
import { 
    CheckboxContainer, 
    Icon, 
    HiddenCheckbox, 
    StyledCheckbox, 
} from './style';
import checkMark from '../../images/check-mark.svg';

interface Props {
    checked: boolean,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
};

const Checkbox: React.FC<Props> = ({
    checked,
    ...props
}) => {
    const content = (
        <CheckboxContainer>
            <HiddenCheckbox checked={checked} {...props} />
            <StyledCheckbox checked={checked}>
                <Icon src={checkMark}/>
            </StyledCheckbox>
        </CheckboxContainer>
    );

    return content;
};

export default Checkbox;
