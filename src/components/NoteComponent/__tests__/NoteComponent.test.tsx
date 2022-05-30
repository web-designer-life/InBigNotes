import React from 'react';
import { mount, shallow } from 'enzyme';
import NoteComponent from '..';
import { INote } from '../../../interfaces';

const noteComponentProps = {
    note: {
        id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
        title: 'Army',
        text: 'An army, ground force, or land force is a fighting force that fights primarily on land.',
        created_at: 1632734670806,
        updated_at: 1632735522467,
    },
    selectedNotes: [
        'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
    ],
    addOrUpdateNote: (note: INote) => Function,
    addSelectedNote: (note: INote) => Function,
    removeUnselectedNote: (note: INote) => Function,
    navigateToPage: (path: string) => Function,
};

const noteComponentPropsWithoutSelectedNotes = {
    note: {
        id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
        title: 'Army',
        text: 'An army, ground force, or land force is a fighting force that fights primarily on land.',
        created_at: 1632734670806,
        updated_at: 1632735522467,
    },
    selectedNotes: [],
    addOrUpdateNote: (note: INote) => Function,
    addSelectedNote: (note: INote) => Function,
    removeUnselectedNote: (note: INote) => Function,
    navigateToPage: (path: string) => Function,
};

describe('NoteComponent component', () => {
    it('should render NoteComponent component', () => {
        const component = shallow(<NoteComponent {...noteComponentProps} />);

        expect(component).toMatchSnapshot();
    });

    describe('handlers', () => {
        describe('handleNavigateToNote', () => {
            it('should call method', () => {
                const component = mount(<NoteComponent {...noteComponentProps} />);

                const noteInfo = component.find('div').first();
                noteInfo.simulate('click');

                expect(component).toMatchSnapshot();
            });
        });

        describe('handleSelectOrUnselectNote', () => {
            it('remove unselected note', () => {
                const component = mount(<NoteComponent {...noteComponentProps} />);

                const input = component.find('input').first();
                input.simulate('change', { preventDefault: jest.fn });

                expect(component).toMatchSnapshot();
            });

            it('add selected note', () => {
                const component = mount(<NoteComponent {...noteComponentPropsWithoutSelectedNotes} />);

                const input = component.find('input').first();
                input.simulate('change', { preventDefault: jest.fn });

                expect(component).toMatchSnapshot();
            });
        });
    });
});
