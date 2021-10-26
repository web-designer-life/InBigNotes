import { navigateToPage, resetStore } from '../../src/actionCreators/common';
import actions from '../../src/actions';
import { ROUTES } from '../../src/constants';

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
