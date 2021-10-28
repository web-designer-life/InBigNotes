import React, { Component } from 'react';
import BUTTON_TYPES from '../Button/types';
import Button from '../Button';
import { COLORS } from '../../constants';
import {
    ModalBackground,
    ModalContainer,
    ModalTitle,
    ButtonsContainer,
} from './style';

interface Props {
    modalText: string;
    buttonConfirmText: string;
    buttonCancelText: string;
    active: boolean;
    onClose: () => void;
    action: () => void;
};

export default class Modal extends Component<Props> {
    handleClick = () => {
        const {
            action,
            onClose
        } = this.props;

        action();
        onClose();
    }

    render() {
        const {
            modalText,
            buttonConfirmText,
            buttonCancelText,
            active,
            onClose,
        } = this.props;

        return (
            active ?
                <ModalBackground>
                    <ModalContainer>
                        <ModalTitle>{modalText}</ModalTitle>
                        <ButtonsContainer>
                            <Button
                                type={BUTTON_TYPES.BUTTON}
                                disabled={false}
                                onClick={this.handleClick}
                                text={buttonConfirmText}
                                color={COLORS.BUTTON.GREEN}
                            />
                            <Button
                                type={BUTTON_TYPES.BUTTON}
                                disabled={false}
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
