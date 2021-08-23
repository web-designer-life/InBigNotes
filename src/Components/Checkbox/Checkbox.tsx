import React from "react";
import { CheckboxContainer, Icon, HiddenCheckbox, StyledCheckbox } from './style';

interface Props {
    className?: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    labelWrap?: boolean;
}

const Checkbox: React.FC<Props> = ({
    checked,
    labelWrap = true,
    ...props
}) => {
    const content = (
        <CheckboxContainer>
            <HiddenCheckbox checked={checked} {...props} />
            <StyledCheckbox checked={checked}>
                <Icon viewBox="0 0 54 40">
                    <path d="M51.6613 0.0487328C51.5347 0.0856743 51.3574 0.155453 51.2603 0.204712C51.1674 0.258076 43.5223 5.28233 34.2731 11.3738C25.0238 17.4653 17.4336 22.4527 17.4041 22.4568C17.3703 22.4568 14.1029 20.0514 10.1389 17.1041C6.17076 14.1569 2.82736 11.6981 2.70494 11.6406C2.02106 11.2999 1.12189 11.4477 0.560432 11.9937C0.0116407 12.5314 -0.161439 13.4344 0.163614 14.0912C0.218493 14.202 3.7603 19.9077 8.03243 26.7668C13.9847 36.3268 15.8506 39.2905 16.0194 39.4629C16.1588 39.6024 16.3361 39.7297 16.5134 39.8077C17.2901 40.1607 18.0753 40.0252 18.7085 39.4218C18.8563 39.2823 22.2377 35.7686 26.2143 31.6145C30.1951 27.4605 37.9795 19.3412 43.5097 13.574C49.044 7.80678 53.6243 3.00418 53.6918 2.90156C53.9282 2.54855 54 2.30636 54 1.85484C53.9958 1.35816 53.9071 1.09545 53.6116 0.713707C53.2655 0.278599 52.78 0.0282059 52.2101 0.00357819C52.0117 -0.00873566 51.8091 0.0117912 51.6613 0.0487328Z" fill="#0047FF"/>
                </Icon>
            </StyledCheckbox>
        </CheckboxContainer>
    );

    return labelWrap ? <label>{content}</label> : <>{content}</>;
};

export default Checkbox;