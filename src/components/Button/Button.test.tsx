import React from 'react'
import Button from './Button';
import { shallow } from 'enzyme';
import { BUTTON_TYPES, COLORS, TEXTS } from '../../constants';

const greenButtonProps = {
    type: BUTTON_TYPES.BUTTON,
    disabled: false,
    onClick: () => {},
    text: TEXTS.BUTTON.HOME,
    color: COLORS.GREEN,
};

describe("Button component", () => {
    it("should render green Button component", () => {
        const component = shallow(<Button {...greenButtonProps} />);
        expect(component).toMatchSnapshot();
    });

    it("should call onClick method", () => {
        const mockCallBack = jest.fn();
        const component = shallow(
            <Button 
                onClick={mockCallBack} 
                type={BUTTON_TYPES.BUTTON}
                disabled={false}
                text={TEXTS.BUTTON.BACK}
                color={COLORS.RED}
            />
        );
        expect(mockCallBack.mock.calls.length).toBe(0);
        component.simulate("click");
        expect(mockCallBack.mock.calls.length).toBe(1);
    });
});
