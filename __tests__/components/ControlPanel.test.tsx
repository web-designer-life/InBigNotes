import React from 'react';
import { shallow } from 'enzyme';
import ControlPanel from '../../src/components/ControlPanel';
import { INote } from '../../src/interfaces';

const controlPanelProps = {
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
    selectAllNotes: (notes: INote[]) => Function,
    unselectAllNotes: () => Function,
    filterAction: (filterType: string) => Function,
};

const controlPanelPropsWithoutSelectedNotes = {
    notes: [
        {
            id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
            title: 'Army',
            text: 'An army, ground force, or land force is a fighting force that fights primarily on land.',
            created_at: 1632734670806,
            updated_at: 1632735522467,
        },
    ],
    selectedNotes: [],
    filterType: 'title',
    fetchNotes: (filterType: string) => Function,
    selectAllNotes: (notes: INote[]) => Function,
    unselectAllNotes: () => Function,
    filterAction: (filterType: string) => Function,
};

describe('ControlPanel component', () => {
    it('should render ControlPanel component', () => {
        const component = shallow(<ControlPanel {...controlPanelProps} />);
        expect(component).toMatchSnapshot();
    });

    it('should render ControlPanel component without selectedNotes', () => {
        const component = shallow(<ControlPanel {...controlPanelPropsWithoutSelectedNotes} />);
        expect(component).toMatchSnapshot();
    });
});
