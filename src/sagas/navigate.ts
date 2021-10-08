import { 
    all, 
    call, 
    takeEvery,
} from 'redux-saga/effects';
import actions from '../actions';
import { history } from '../store/store';

export function* navigateToPage({ payload } : any) {
    const { path } = payload;
    
	yield call(history.push, path);
};

export default function navigate() {
    return all([ 
        takeEvery(actions.NAVIGATE_TO_PAGE, navigateToPage),
    ]);
};
