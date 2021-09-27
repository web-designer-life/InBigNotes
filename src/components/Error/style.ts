import styled from 'styled-components';

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
    border: 2px solid #000000;
	border-radius: 5px;
	padding: 10px 15px;
	background-color: #FFFFFF;
	color: #000000;
    transition-duration: .1s;
	&:hover {
		background-color: #000000;
		color: #FFFFFF;
	}
`;

export {
    Container,
    Message,
	BackLink,
}