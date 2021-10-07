import React from 'react'
import ControlPanel from '../components/ControlPanel/ControlPanel';
import { shallow } from 'enzyme';
import { INote } from '../interfaces';

const controlPanelProps = {
    notes: [
        {
            id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
            title: 'Army',
            text: 'An army, ground force, or land force is a fighting force that fights primarily on land.',
            created_at: 1632734670806,
            updated_at: 1632735522467
        },
    ],
    selectedNotes: [
        'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
    ],
    filter: 'title',
    fetchNotes: (filter: string) => Function,
    selectAllNotes: (notes: INote[]) => Function,
    unselectAllNotes: () => Function,
    filterAction: (filter: string) => Function,
};

describe("ControlPanel component", () => {
    it("should render ControlPanel component", () => {
        const component = shallow(<ControlPanel {...controlPanelProps} />);
        expect(component).toMatchSnapshot();
    });
});
