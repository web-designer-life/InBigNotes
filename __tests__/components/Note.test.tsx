import React from 'react';
import { shallow } from 'enzyme';
import Note from '../../src/components/Note';
import { INote } from '../../src/interfaces';

const noteProps = {
    typeName: 'Save',
    note: {
        id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
        title: 'Army',
        text: 'An army, ground force, or land force is a fighting force that fights primarily on land.',
        created_at: 1632734670806,
        updated_at: 1632735522467,
    },
    addOrUpdateNote: (note: INote) => Function,
    navigateToPage: (path: string) => Function,
};

const notePropsWithoutNote = {
    typeName: 'Save',
    addOrUpdateNote: (note: INote) => Function,
    navigateToPage: (path: string) => Function,
};

describe('Note component', () => {
    it('should render Note component', () => {
        const component = shallow(<Note {...noteProps} />);
        expect(component).toMatchSnapshot();
    });

    it('should render Note component without note', () => {
        const component = shallow(<Note {...notePropsWithoutNote} />);
        expect(component).toMatchSnapshot();
    });
});
