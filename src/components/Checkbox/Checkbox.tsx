import React from 'react';
import { 
    CheckboxContainer, 
    Icon, 
    HiddenCheckbox, 
    StyledCheckbox, 
} from './style';
import checkMark from '../../images/check-mark.svg';

interface Props {
    className?: string,
    checked: boolean,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    labelWrap?: boolean,
};

const Checkbox: React.FC<Props> = ({
    checked,
    labelWrap = true,
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

    return <label>{content}</label>;
};

export default Checkbox;
