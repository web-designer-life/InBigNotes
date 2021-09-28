import styled from 'styled-components';
import { COLORS } from '../../constants';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	flex-direction: column;
`;

const Message = styled.h1`
    margin: 10px;
`;

const BackLink = styled.div`
	font-family: 'Lora', 'Arial', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    border: 2px solid ${COLORS.BLACK};
	border-radius: 5px;
	padding: 10px 15px;
	background-color: ${COLORS.WHITE};
	color: ${COLORS.BLACK};
    transition-duration: .1s;
	&:hover {
		background-color: ${COLORS.BLACK};
		color: ${COLORS.WHITE};
	}
`;

export {
    Container,
    Message,
	BackLink,
}