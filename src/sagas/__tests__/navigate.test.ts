import {
    all,
    put,
    takeEvery,
} from 'redux-saga/effects';
import { push } from 'connected-react-router';
import navigateSaga, { navigateToPage } from '../navigate';
import actions from '../../actions';
import { ROUTES } from '../../constants';

describe('navigateSaga sagas', () => {
    it('navigate action', () => {
        const generator = navigateToPage({ payload: { path: ROUTES.HOME } });

        expect(generator.next().value).toEqual(
            put(push(ROUTES.HOME))
        );
    });

    it('navigateSaga', () => {
        const saga = navigateSaga();

        expect(saga).toEqual(
            all([
                takeEvery(actions.NAVIGATE_TO_PAGE, navigateToPage),
            ])
        );
    });
});
