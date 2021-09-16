import { all } from 'redux-saga/effects';
import noteSaga from './note';
import notesSaga from './notes';

export default function* rootSaga() {
    yield all([
        noteSaga(),
        notesSaga(),
    ]);
};
