import * as React from 'react';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import Container from './Container';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <>
                <GlobalStyle />
                <Container />
            </>
        );
    }
};
  
export default App;
