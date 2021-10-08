// import { runSaga } from 'redux-saga';
// import { navigateToPage } from '../../sagas/navigate';
// import { ROUTES } from '../../constants';

// describe('navigateSaga', () => {
//     describe('navigateToPage', () => {
//         it('should call and dispatch action', async () => {
//             const path = ROUTES.HOME;
//             const dispatched = [];
//             const result = await runSaga({
//                 dispatch: (action) => dispatched.push(action),
//             }, makeAuthorsApiRequest);
        
//             expect(requestAuthors).toHaveBeenCalledTimes(1);
//             expect(dispatched).toEqual();
//             requestAuthors.mockClear();
//         });
//     });
// });

// navigateToPageAction: (path: string) => dispatch(navigateToPage(path)),