import React, { Component } from 'react';
import {
    ModalBackground,
    ModalContainer,
    ModalTitle,
    ButtonsContainer, 
} from './style';
import Button from '../Button/Button';
import { BUTTON_TYPES, COLORS } from '../../constants';

interface Props {
    modalText: string,
    buttonConfirmText: string, 
    buttonCancelText: string,
    active: boolean,
    onClose: () => void,
    action: () => void,
};

export default class Modal extends Component<Props> {
    constructor(props: Props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {
        const {
            action, 
            onClose
        } = this.props;
        
        action();
        onClose();
    };

	render() {
        const {
            modalText,
            buttonConfirmText,
            buttonCancelText,
            active,
            onClose,
            action,
        } = this.props;

		return (
            active ?
            <ModalBackground>
                <ModalContainer>
                    <ModalTitle>{modalText}</ModalTitle>
                    <ButtonsContainer>
                        <Button 
                            type={BUTTON_TYPES.BUTTON}
                            onClick={this.handleClick}
                            text={buttonConfirmText} 
                            color={COLORS.BUTTON.GREEN}
                        />
                        <Button 
                            type={BUTTON_TYPES.BUTTON}
                            onClick={onClose} 
                            text={buttonCancelText} 
                            color={COLORS.BUTTON.RED}
                        />
                    </ButtonsContainer>
                </ModalContainer>
            </ModalBackground> :
            null
		);
	}
};
