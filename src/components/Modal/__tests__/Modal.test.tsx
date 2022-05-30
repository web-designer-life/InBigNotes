import React from 'react';
import { mount, shallow } from 'enzyme';
import Modal from '..';
import { TEXTS } from '../../../constants';

const activeModalProps = {
    modalText: TEXTS.MODAL.DELETE,
    buttonConfirmText: TEXTS.BUTTON.DELETE,
    buttonCancelText: TEXTS.BUTTON.CANCEL,
    active: true,
    onClose: () => { },
    action: () => { },
};

const inactiveModalProps = {
    modalText: TEXTS.MODAL.DELETE,
    buttonConfirmText: TEXTS.BUTTON.DELETE,
    buttonCancelText: TEXTS.BUTTON.CANCEL,
    active: false,
    onClose: () => { },
    action: () => { },
};

describe('Modal component', () => {
    it('should render active Modal component', () => {
        const component = shallow(<Modal {...activeModalProps} />);

        expect(component).toMatchSnapshot();
    });

    it('should render inactive Modal component', () => {
        const component = shallow(<Modal {...inactiveModalProps} />);

        expect(component).toMatchSnapshot();
    });

    describe('handlers', () => {
        describe('handleClick', () => {
            it('should call method', () => {
                const component = mount(<Modal {...activeModalProps} />);

                const confirmButton = component.find('button[color="green"]').first();
                confirmButton.simulate('click');

                expect(component).toMatchSnapshot();
            });
        });
    });
});
