import { all } from 'redux-saga/effects';
import notesSaga from './notes';

export default function* rootSaga() {
    yield all([
        notesSaga(),
    ]);
};
