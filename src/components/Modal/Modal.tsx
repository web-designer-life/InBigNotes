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

};

export default class Modal extends React.Component<Props> {
	render() {
		return (
			<ModalBackground>
				<ModalContainer>
					<ModalTitle>You have made changes to your note. Do you want to apply the changes?</ModalTitle>
					<ButtonsContainer>
						<Button 
                            type={BUTTON_TYPES.Button}
                            onClick={() => {}} 
                            text="Yes" 
                            color={BUTTON_COLORS.Green}
                        />
						<Button 
                            type={BUTTON_TYPES.Button}
                            onClick={() => {}} 
                            text="No" 
                            color={BUTTON_COLORS.Red}
                        />
					</ButtonsContainer>
				</ModalContainer>
			</ModalBackground>
		);
	}
};
