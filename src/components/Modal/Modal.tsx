import * as React from 'react';
import {
    ModalBackground,
    ModalContainer,
    ModalTitle,
    ButtonsContainer, 
} from './style';
import Button, { ButtonTypes } from '../Button/Button';

export default class Modal extends React.Component {
	render() {
		return (
			<ModalBackground>
				<ModalContainer>
					<ModalTitle>You have made changes to your note. Do you want to apply the changes?</ModalTitle>
					<ButtonsContainer>
						<Button 
                            type={ButtonTypes.Button}
                            onClick={() => {}} 
                            text="Yes" 
                            color="green"
                        />
						<Button 
                            type={ButtonTypes.Button}
                            onClick={() => {}} 
                            text="No" 
                            color="red"
                        />
					</ButtonsContainer>
				</ModalContainer>
			</ModalBackground>
		);
	}
};
