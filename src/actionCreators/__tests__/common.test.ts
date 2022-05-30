import { navigateToPage, resetStore } from '../common';
import actions from '../../actions';
import { ROUTES } from '../../constants';

describe('Common actionCreators', () => {
    it('navigateToPage', () => {
        const navigateToPageActionCreator = navigateToPage(ROUTES.HOME);

        expect(navigateToPageActionCreator).toEqual({
            type: actions.NAVIGATE_TO_PAGE,
            payload: {
                path: ROUTES.HOME,
            },
        });
    });

    it('resetStore', () => {
        const resetStoreActionCreator = resetStore();

        expect(resetStoreActionCreator).toEqual({
            type: actions.RESET_STORE,
        });
    });
});
