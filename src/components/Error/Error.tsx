import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { Container, Message } from './style';

export default class Error extends React.Component {
	render() {
        return (
            <Container>
                <Message>404 - Not Found!</Message>
                <Link to={ROUTES.HOME}>Go home</Link>
            </Container>
        );
    };
};
