import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { 
    Container, 
    Message, 
    BackLink,
} from './style';

export default class Error extends React.Component {
	render() {
        return (
            <Container>
                <Message>404 - Not Found!</Message>
                <Link to={ROUTES.HOME}>
                    <BackLink>Go home</BackLink>
                </Link>
            </Container>
        );
    };
};
