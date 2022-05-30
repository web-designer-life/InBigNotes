import actions from '../actions';

const navigateToPage = (path: string) => ({
    type: actions.NAVIGATE_TO_PAGE,
    payload: { path },
});

const resetStore = () => ({
    type: actions.RESET_STORE,
});

export {
    navigateToPage,
    resetStore,
};
