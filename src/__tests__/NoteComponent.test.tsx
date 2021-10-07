import React from 'react'
import NoteComponent from '../components/Notes/NoteComponent';
import { shallow } from 'enzyme';
import { Note } from '../interfaces';

const noteComponentProps = {
    note: {
        id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
        title: 'Army',
        text: 'An army, ground force, or land force is a fighting force that fights primarily on land.',
        created_at: 1632734670806,
        updated_at: 1632735522467
    },
    selectedNotes: [
        'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
    ],
    addOrUpdateNote: (note: Note) => Function,
    addSelectedNote: (note: Note) => Function,
    removeUnselectedNote: (note: Note) => Function,
    navigateToPage: (path: string) => Function,
};

describe("NoteComponent component", () => {
    it("should render NoteComponent component", () => {
        const component = shallow(<NoteComponent {...noteComponentProps} />);
        expect(component).toMatchSnapshot();
    });
});
