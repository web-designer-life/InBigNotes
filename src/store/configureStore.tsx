import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer, initialState } from './reducers';
import rootSaga from './sagas';

function configureStore(initialState: any) { 
    const sagaMiddleware = createSagaMiddleware();
    
    const middlewares = [ sagaMiddleware ]; 
    const middlewareEnhancer = applyMiddleware(...middlewares); 
 
    const enhancers = [ middlewareEnhancer ]; 
    const composedEnhancers = composeWithDevTools(...enhancers); 
 
    const store = createStore(rootReducer, initialState, composedEnhancers); 

    sagaMiddleware.run(rootSaga); 

    return store;
};

export const store = configureStore(initialState);
