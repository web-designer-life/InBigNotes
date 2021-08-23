import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers/index';
import rootSaga from '../sagas/index';
 
export default function configureStore(initialState: any) { 
    const sagaMiddleware = createSagaMiddleware();
    
    const middlewares = [ sagaMiddleware ]; 
    const middlewareEnhancer = applyMiddleware(...middlewares); 
 
    const enhancers = [ middlewareEnhancer ]; 
    const composedEnhancers = composeWithDevTools(...enhancers); 
 
    const store = createStore(reducer, initialState, composedEnhancers); 

    sagaMiddleware.run(rootSaga); 

    return store; 
}