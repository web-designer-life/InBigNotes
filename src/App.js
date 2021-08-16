import React from 'react';
import './App.css';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import Container from './Container';

class App extends React.Component {
    render() {
        return (
            <>
                <GlobalStyle />
                <Container />
            </>
        );
    }
}

export default App;
