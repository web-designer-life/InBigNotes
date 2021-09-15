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
    active: boolean,
    onClose: () => void,
    action: () => void,
};

export default class Modal extends React.Component<Props> {
	render() {
        const {
            active,
            onClose,
            action,
        } = this.props;

		return (
            active ?
            <ModalBackground>
                <ModalContainer>
                    <ModalTitle>Do you want to confirm the action?</ModalTitle>
                    <ButtonsContainer>
                        <Button 
                            type={BUTTON_TYPES.Button}
                            onClick={() => {
                                action();
                                onClose();
                            }}
                            text="Yes" 
                            color={BUTTON_COLORS.Green}
                        />
                        <Button 
                            type={BUTTON_TYPES.Button}
                            onClick={onClose} 
                            text="No" 
                            color={BUTTON_COLORS.Red}
                        />
                    </ButtonsContainer>
                </ModalContainer>
            </ModalBackground> :
            null
		);
	}
};
