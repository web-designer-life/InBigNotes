import { all, call, takeEvery } from 'redux-saga/effects';
import actions from '../actions';
import { history } from '../configureStore';

type Params = { path: string, type: string };

function* navigateToPage({ path }: Params) {
    console.log(history, path)
	yield call(history.push, path);
};

export default function navigate() {
    return all([ 
        takeEvery(actions.NAVIGATE_TO_PAGE, navigateToPage),
    ]);
};
