import React from 'react'
import Modal from '../components/Modal/Modal';
import { shallow } from 'enzyme';
import { TEXTS } from '../constants';

const modalProps = {
    modalText: TEXTS.MODAL.DELETE,
    buttonConfirmText: TEXTS.BUTTON.DELETE,
    buttonCancelText: TEXTS.BUTTON.CANCEL,
    active: true,
    onClose: () => {},
    action: () => {},
};

describe("Modal component", () => {
    it("should render Modal component", () => {
        const component = shallow(<Modal {...modalProps} />);
        expect(component).toMatchSnapshot();
    });
});
