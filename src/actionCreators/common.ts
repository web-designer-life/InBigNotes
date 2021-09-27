import actions from '../actions';

export const navigateToPage = (path: string) => ({
    type: actions.NAVIGATE_TO_PAGE,
    path,
});

export const resetStore = () => ({
    type: actions.RESET_STORE,
});
