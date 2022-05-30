import React from 'react';
import { mount, shallow } from 'enzyme';
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

const notePropsWithoutNoteAndWithUpdateTypeName = {
    typeName: 'Update',
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

    describe('handlers', () => {
        describe('onSubmit', () => {
            it('should call method with note', () => {
                const component = mount(<Note {...noteProps} />);

                const form = component.find('form').first();
                form.simulate('submit', { preventDefault: jest.fn });

                expect(component).toMatchSnapshot();
            });

            it('should call method without note', () => {
                const component = mount(<Note {...notePropsWithoutNote} />);

                const form = component.find('form').first();
                form.simulate('submit', { preventDefault: jest.fn });

                expect(component).toMatchSnapshot();
            });
        });

        describe('handleChange', () => {
            it('should call method with changed title with note', () => {
                const component = mount(<Note {...noteProps} />);

                const inputTitle = component.find('input').first();
                inputTitle.simulate('change', { preventDefault: jest.fn, target: { name: 'title', value: 'Army1', } });

                expect(component).toMatchSnapshot();
            });

            it('should call method with changed text with note', () => {
                const component = mount(<Note {...noteProps} />);

                const textareaText = component.find('textarea').first();
                textareaText.simulate('change', { preventDefault: jest.fn, target: { name: 'text', value: 'Should I...', } });

                expect(component).toMatchSnapshot();
            });

            it('should call method with changed title without note', () => {
                const component = mount(<Note {...notePropsWithoutNote} />);

                const inputTitle = component.find('input').first();
                inputTitle.simulate('change', { preventDefault: jest.fn, target: { name: 'title', value: 'Army1', } });

                expect(component).toMatchSnapshot();
            });

            it('should call method with changed text without note', () => {
                const component = mount(<Note {...notePropsWithoutNote} />);

                const textareaText = component.find('textarea').first();
                textareaText.simulate('change', { preventDefault: jest.fn, target: { name: 'text', value: 'Should I...', } });

                expect(component).toMatchSnapshot();
            });
        });

        describe('handleCheckButtonAction', () => {
            it('should call handleNavigateToHome method without changes', () => {
                const component = mount(<Note {...noteProps} />);

                const backToHomePageButton = component.find('button[color="red"]').first();
                backToHomePageButton.simulate('click');

                expect(component).toMatchSnapshot();
            });

            it('should call handleModalBackButtonClick method with changes', () => {
                const component = mount(<Note {...noteProps} />);

                const inputTitle = component.find('input').first();
                inputTitle.simulate('change', { preventDefault: jest.fn, target: { name: 'title', value: 'Army1', } });

                const backToHomePageButton = component.find('button[color="red"]').first();
                backToHomePageButton.simulate('click');

                expect(component).toMatchSnapshot();
            });
        });

        describe('handleCheckSaveOrUpdateChanges', () => {
            it('should call method with note and with changes', () => {
                const component = mount(<Note {...noteProps} />);

                const inputTitle = component.find('input').first();
                inputTitle.simulate('change', { preventDefault: jest.fn, target: { name: 'title', value: 'Army1', } });

                expect(component).toMatchSnapshot();
            });

            it('should call method with note and with changes', () => {
                const component = mount(<Note {...notePropsWithoutNote} />);

                const inputTitle = component.find('input').first();
                inputTitle.simulate('change', { preventDefault: jest.fn, target: { name: 'title', value: 'Army', } });

                const textareaText = component.find('textarea').first();
                textareaText.simulate('change', { preventDefault: jest.fn, target: { name: 'text', value: 'Should I...', } });

                expect(component).toMatchSnapshot();
            });
        });

        describe('handleModalSubmitButtonClick', () => {
            it('should call method with note and with changes', () => {
                const component = mount(<Note {...noteProps} />);

                const inputTitle = component.find('input').first();
                inputTitle.simulate('change', { preventDefault: jest.fn, target: { name: 'title', value: 'Army1', } });

                const textareaText = component.find('textarea').first();
                textareaText.simulate('change', { preventDefault: jest.fn, target: { name: 'text', value: 'Should I...', } });

                const addOrUpdateNoteButton = component.find('button[color="green"]').first();
                addOrUpdateNoteButton.simulate('click');

                expect(component).toMatchSnapshot();
            });

            it('should call method without note and with changes', () => {
                const component = mount(<Note {...notePropsWithoutNoteAndWithUpdateTypeName} />);

                const inputTitle = component.find('input').first();
                inputTitle.simulate('change', { preventDefault: jest.fn, target: { name: 'title', value: 'Army', } });

                const textareaText = component.find('textarea').first();
                textareaText.simulate('change', { preventDefault: jest.fn, target: { name: 'text', value: 'Should I...', } });

                const addOrUpdateNoteButton = component.find('button[color="green"]').first();
                addOrUpdateNoteButton.simulate('click');

                expect(component).toMatchSnapshot();
            });
        });

        describe('handleCheckCancelChanges', () => {
            it('should call method with note and with changes', () => {
                const component = mount(<Note {...noteProps} />);

                const inputTitle = component.find('input').first();
                inputTitle.simulate('change', { preventDefault: jest.fn, target: { name: 'title', value: 'Army1', } });

                const textareaText = component.find('textarea').first();
                textareaText.simulate('change', { preventDefault: jest.fn, target: { name: 'text', value: 'Should I...', } });

                expect(component).toMatchSnapshot();
            });

            it('should call method with note and with changes', () => {
                const component = mount(<Note {...notePropsWithoutNote} />);

                expect(component).toMatchSnapshot();
            });
        });

        describe('handleModalCancelButtonClick', () => {
            it('should call method', () => {
                const component = mount(<Note {...noteProps} />);

                const inputTitle = component.find('input').first();
                inputTitle.simulate('change', { preventDefault: jest.fn, target: { name: 'title', value: 'Army1', } });

                const textareaText = component.find('textarea').first();
                textareaText.simulate('change', { preventDefault: jest.fn, target: { name: 'text', value: 'Should I...', } });

                const resetButton = component.find('button[color="red"]').last();
                resetButton.simulate('click');

                expect(component).toMatchSnapshot();
            });
        });
    });
});
