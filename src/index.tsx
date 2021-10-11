import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import history from './store/store';
import { store } from './store/store';
import App from './containers/App';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App history={history} />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
