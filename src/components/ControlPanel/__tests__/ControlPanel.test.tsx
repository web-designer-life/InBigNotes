import React from 'react';
import { mount, shallow } from 'enzyme';
import ControlPanel from '..';
import { INote } from '../../../interfaces';

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

    describe('handlers', () => {
        describe('handleSelectOrUnselectNotes', () => {
            it('with selectedNotes', () => {
                const component = mount(<ControlPanel {...controlPanelProps} />);

                const input = component.find('input').first();
                input.simulate('change', { preventDefault: jest.fn });

                expect(component).toMatchSnapshot();
            });

            it('without selectedNotes', () => {
                const component = mount(<ControlPanel {...controlPanelPropsWithoutSelectedNotes} />);

                const input = component.find('input').first();
                input.simulate('change', { preventDefault: jest.fn });

                expect(component).toMatchSnapshot();
            });
        });
    });
});
