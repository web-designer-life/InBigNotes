import React, { Component } from 'react';
import Error from '../../components/Error';
import { ROUTES } from '../../constants';

interface Props {
    navigateToPageAction(path: string): Function,
};

export default class ErrorContainer extends Component<Props> {  
    constructor(props: Props) {
        super(props);

        this.handleNavigateToHome = this.handleNavigateToHome.bind(this);
    };

    handleNavigateToHome() {
		this.props.navigateToPageAction(ROUTES.HOME);
	};

    render() {        
        return ( 
            <Error navigateToPage={this.handleNavigateToHome} />
        );
    }
};
