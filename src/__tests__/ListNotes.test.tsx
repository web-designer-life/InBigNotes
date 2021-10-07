import React from 'react'
import ListNotes from '../components/ListNotes';
import { shallow } from 'enzyme';
import { INote } from '../interfaces';

const ListNotesProps = {
    notes: [
        {
            id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
            title: 'Army',
            text: 'An army, ground force, or land force is a fighting force that fights primarily on land.',
            created_at: 1632734670806,
            updated_at: 1632735522467
        }
    ],
    selectedNotes: [
        'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
    ],
    addOrUpdateNote: (note: INote) => Function,
    addSelectedNote: (note: INote) => Function,
    removeUnselectedNote: (note: INote) => Function,
    navigateToPage: (path: string) => Function,
};

describe("ListNotes component", () => {
    it("should render ListNotes component", () => {
        const component = shallow(<ListNotes {...ListNotesProps} />);
        expect(component).toMatchSnapshot();
    });
});
