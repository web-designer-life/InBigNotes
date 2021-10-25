import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../src/components/Home';
import { INote } from '../../src/interfaces';

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
    selectedNotes: [
        'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
    ],
    filterType: 'title',
    fetchNotes: (filterType: string) => Function,
    deleteNotes: (notes: INote[]) => Function,
    addSelectedNote: (note: INote) => Function,
    removeUnselectedNote: (note: INote) => Function,
    selectAllNotes: (notes: INote[]) => Function,
    unselectAllNotes: () => Function,
    filterAction: (filterType: string) => Function,
    navigateToPage: (path: string) => Function,
};

const homePropsWithoutNotes = {
    notes: [],
    selectedNotes: [
        'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
    ],
    filterType: 'title',
    fetchNotes: (filterType: string) => Function,
    deleteNotes: (notes: INote[]) => Function,
    addSelectedNote: (note: INote) => Function,
    removeUnselectedNote: (note: INote) => Function,
    selectAllNotes: (notes: INote[]) => Function,
    unselectAllNotes: () => Function,
    filterAction: (filterType: string) => Function,
    navigateToPage: (path: string) => Function,
};

describe('Home component', () => {
    it('should render Home component', () => {
        const component = shallow(<Home {...homeProps} />);
        expect(component).toMatchSnapshot();
    });

    it('should render Home component without notes', () => {
        const component = shallow(<Home {...homePropsWithoutNotes} />);
        expect(component).toMatchSnapshot();
    });
});
