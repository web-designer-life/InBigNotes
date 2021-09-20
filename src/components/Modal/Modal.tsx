import * as React from 'react';
import {
    ModalBackground,
    ModalContainer,
    ModalTitle,
    ButtonsContainer, 
} from './style';
import Button from '../Button/Button';
import { BUTTON_TYPES, BUTTON_COLORS } from '../../constants';

interface Props {
    modalText: string,
    buttonConfirmText: string, 
    buttonCancelText: string,
    active: boolean,
    onClose: () => void,
    action: () => void,
};

export default class Modal extends React.Component<Props> {
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
                            onClick={() => {
                                action();
                                onClose();
                            }}
                            text={buttonConfirmText} 
                            color={BUTTON_COLORS.GREEN}
                        />
                        <Button 
                            type={BUTTON_TYPES.BUTTON}
                            onClick={onClose} 
                            text={buttonCancelText} 
                            color={BUTTON_COLORS.RED}
                        />
                    </ButtonsContainer>
                </ModalContainer>
            </ModalBackground> :
            null
		);
	}
};
