import { all } from 'redux-saga/effects';
import noteSaga from './note';
import notesSaga from './notes';
import navigateSaga from './navigate';

export default function* rootSaga() {
    yield all([
        noteSaga(),
        notesSaga(),
        navigateSaga(),
    ]);
};
