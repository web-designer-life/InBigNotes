import { all } from 'redux-saga/effects';
import navigate from './navigate';
import noteSaga from './note';
import notesSaga from './notes';

export default function* rootSaga() {
    yield all([
        noteSaga(),
        notesSaga(),
        navigate(),
    ]);
};
