import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory, createMemoryHistory } from 'history';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

let createHistory;

if (typeof document !== 'undefined') {
	createHistory = createBrowserHistory;
} else {
	createHistory = createMemoryHistory;
}

const history = createHistory();

export default history;

function configureStore() { 
    const sagaMiddleware = createSagaMiddleware();
    
    const routeMiddleware = routerMiddleware(history);
    
    const middlewares = [ sagaMiddleware, routeMiddleware ]; 
    const middlewareEnhancer = applyMiddleware(...middlewares); 
 
    const enhancers = [ middlewareEnhancer ]; 
    const composedEnhancers = composeWithDevTools(...enhancers); 
 
    const store = createStore(rootReducer(history), composedEnhancers); 

    sagaMiddleware.run(rootSaga); 

    return store;
};

export const store = configureStore();
