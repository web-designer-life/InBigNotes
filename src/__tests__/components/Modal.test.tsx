import React from 'react'
import Modal from '../../components/Modal';
import { shallow } from 'enzyme';
import { TEXTS } from '../../constants';

const activeModalProps = {
    modalText: TEXTS.MODAL.DELETE,
    buttonConfirmText: TEXTS.BUTTON.DELETE,
    buttonCancelText: TEXTS.BUTTON.CANCEL,
    active: true,
    onClose: () => {},
    action: () => {},
};

const inactiveModalProps = {
    modalText: TEXTS.MODAL.DELETE,
    buttonConfirmText: TEXTS.BUTTON.DELETE,
    buttonCancelText: TEXTS.BUTTON.CANCEL,
    active: false,
    onClose: () => {},
    action: () => {},
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
});
