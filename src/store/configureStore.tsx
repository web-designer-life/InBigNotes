import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer, initialState } from '../reducers';

export const store = createStore(
    rootReducer, 
    initialState, 
    composeWithDevTools()
);