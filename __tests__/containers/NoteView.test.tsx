import React from 'react';
import { mount, shallow } from 'enzyme';
import NoteView from '../../src/containers/NoteView/NoteView';
import { INote } from '../../src/interfaces';

const noteProps = {
    match: {
        params: {
            noteId: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
        }
    },
    note: {
        id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
        title: 'Army',
        text: 'An army, ground force, or land force is a fighting force that fights primarily on land.',
        created_at: 1632734670806,
        updated_at: 1632735522467,
    },
    isLoading: false,
    error: false,
    fetchNoteAction: (id: string) => Function,
    updateNoteAction: (note: INote) => Function,
    navigateToPageAction: (path: string) => Function,
    resetStoreAction: () => Function,
};

const notePropsWithLoading = {
    match: {
        params: {
            noteId: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
        }
    },
    note: {
        id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
        title: 'Army',
        text: 'An army, ground force, or land force is a fighting force that fights primarily on land.',
        created_at: 1632734670806,
        updated_at: 1632735522467,
    },
    isLoading: true,
    error: false,
    fetchNoteAction: (id: string) => Function,
    updateNoteAction: (note: INote) => Function,
    navigateToPageAction: (path: string) => Function,
    resetStoreAction: () => Function,
};

const notePropsWithError = {
    match: {
        params: {
            noteId: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
        }
    },
    note: {
        id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
        title: 'Army',
        text: 'An army, ground force, or land force is a fighting force that fights primarily on land.',
        created_at: 1632734670806,
        updated_at: 1632735522467,
    },
    isLoading: false,
    error: true,
    fetchNoteAction: (id: string) => Function,
    updateNoteAction: (note: INote) => Function,
    navigateToPageAction: (path: string) => Function,
    resetStoreAction: () => Function,
};

describe('NoteView', () => {
    it('should render NoteView', () => {
        const component = shallow(<NoteView {...noteProps} />);

        expect(component).toMatchSnapshot();
    });

    it('should render Loader', () => {
        const component = shallow(<NoteView {...notePropsWithLoading} />);

        expect(component).toMatchSnapshot();

        component.unmount();
    });

    describe('handlers', () => {
        describe('handleNavigateToHome', () => {
            it('should call method', () => {
                const component = mount(<NoteView {...notePropsWithError} />);

                const createNoteButton = component.find('button[color="green"]').first();
                createNoteButton.simulate('click');

                expect(component).toMatchSnapshot();
            });
        });
    });
});
