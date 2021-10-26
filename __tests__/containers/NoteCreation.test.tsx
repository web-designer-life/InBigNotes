import React from 'react';
import { mount, shallow } from 'enzyme';
import NoteCreation from '../../src/containers/NoteCreation/NoteCreation';
import { INote } from '../../src/interfaces';

const noteProps = {
    isLoading: false,
    error: false,
    addNoteAction: (note: INote) => Function,
    navigateToPageAction: (path: string) => Function,
    resetStoreAction: () => Function,
};

const notePropsWithLoading = {
    isLoading: true,
    error: false,
    addNoteAction: (note: INote) => Function,
    navigateToPageAction: (path: string) => Function,
    resetStoreAction: () => Function,
};

const notePropsWithError = {
    isLoading: false,
    error: true,
    addNoteAction: (note: INote) => Function,
    navigateToPageAction: (path: string) => Function,
    resetStoreAction: () => Function,
};

describe('NoteView', () => {
    it('should render NoteView', () => {
        const component = shallow(<NoteCreation {...noteProps} />);

        expect(component).toMatchSnapshot();
    });

    it('should render Loader', () => {
        const component = shallow(<NoteCreation {...notePropsWithLoading} />);

        expect(component).toMatchSnapshot();

        component.unmount();
    });

    describe('handlers', () => {
        describe('handleNavigateToHome', () => {
            it('should call method', () => {
                const component = mount(<NoteCreation {...notePropsWithError} />);

                const createNoteButton = component.find('button[color="green"]').first();
                createNoteButton.simulate('click');

                expect(component).toMatchSnapshot();
            });
        });
    });
});
