import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import history, { store } from './store/store';
import App from './containers/App';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App history={history} />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
