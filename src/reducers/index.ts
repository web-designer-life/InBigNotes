import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import notes from './notes';
import note from './note';

export function rootReducer(history: any) {
    return combineReducers({
		router: connectRouter(history),
		notes,
		note,
	});
};
