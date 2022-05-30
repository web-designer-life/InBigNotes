import React from 'react';
import { mount, shallow } from 'enzyme';
import HomeContainer from "../HomeContainer";
import { INote } from '../../../interfaces';

const homeProps = {
    notes: [
        {
            id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
            title: 'Army',
            text: 'An army, ground force, or land force is a fighting force that fights primarily on land.',
            created_at: 1632734670806,
            updated_at: 1632735522467,
        },
    ],
    isLoading: false,
    selectedNotes: [
        'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
    ],
    filterType: 'title',
    error: false,
    fetchNotesAction: (filterType: string) => Function,
    deleteNotesAction: (notes: INote[]) => Function,
    addSelectedNoteAction: (note: INote) => Function,
    removeUnselectedNoteAction: (note: INote) => Function,
    selectAllNotesAction: (notes: INote[]) => Function,
    unselectAllNotesAction: () => Function,
    filterAction: (filterType: string) => Function,
    navigateToPageAction: (path: string) => Function,
    resetStoreAction: () => Function,
};

const homePropsWithLoading = {
    notes: [
        {
            id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
            title: 'Army',
            text: 'An army, ground force, or land force is a fighting force that fights primarily on land.',
            created_at: 1632734670806,
            updated_at: 1632735522467,
        },
    ],
    isLoading: true,
    selectedNotes: [
        'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
    ],
    filterType: 'title',
    error: false,
    fetchNotesAction: (filterType: string) => Function,
    deleteNotesAction: (notes: INote[]) => Function,
    addSelectedNoteAction: (note: INote) => Function,
    removeUnselectedNoteAction: (note: INote) => Function,
    selectAllNotesAction: (notes: INote[]) => Function,
    unselectAllNotesAction: () => Function,
    filterAction: (filterType: string) => Function,
    navigateToPageAction: (path: string) => Function,
    resetStoreAction: () => Function,
};

const homePropsWithError = {
    notes: [
        {
            id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
            title: 'Army',
            text: 'An army, ground force, or land force is a fighting force that fights primarily on land.',
            created_at: 1632734670806,
            updated_at: 1632735522467,
        },
    ],
    isLoading: false,
    selectedNotes: [
        'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
    ],
    filterType: 'title',
    error: true,
    fetchNotesAction: (filterType: string) => Function,
    deleteNotesAction: (notes: INote[]) => Function,
    addSelectedNoteAction: (note: INote) => Function,
    removeUnselectedNoteAction: (note: INote) => Function,
    selectAllNotesAction: (notes: INote[]) => Function,
    unselectAllNotesAction: () => Function,
    filterAction: (filterType: string) => Function,
    navigateToPageAction: (path: string) => Function,
    resetStoreAction: () => Function,
};

describe('HomeContainer', () => {
    it('should render HomeContainer', () => {
        const component = shallow(<HomeContainer {...homeProps} />);

        expect(component).toMatchSnapshot();
    });

    it('should render Loader', () => {
        const component = shallow(<HomeContainer {...homePropsWithLoading} />);

        expect(component).toMatchSnapshot();

        component.unmount();
    });

    describe('handlers', () => {
        describe('handleNavigateToHome', () => {
            it('should call method', () => {
                const component = mount(<HomeContainer {...homePropsWithError} />);

                const createNoteButton = component.find('button[color="green"]').first();
                createNoteButton.simulate('click');

                expect(component).toMatchSnapshot();
            });
        });
    });
});
