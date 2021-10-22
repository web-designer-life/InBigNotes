import { 
    all, 
    put, 
    takeEvery,
} from 'redux-saga/effects';
import { push } from 'connected-react-router';
import actions from '../actions';

export function* navigateToPage({ payload } : any) {
    const { path } = payload;
    
    yield put(push(path));
};

export default function navigateSaga() {
    return all([ 
        takeEvery(actions.NAVIGATE_TO_PAGE, navigateToPage),
    ]);
};
