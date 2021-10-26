import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import Button from '../../src/components/Button';
import {
    BUTTON_TYPES,
    COLORS,
    TEXTS,
} from '../../src/constants';

const greenButtonProps = {
    type: BUTTON_TYPES.BUTTON,
    disabled: false,
    onClick: () => { },
    text: TEXTS.BUTTON.HOME,
    color: COLORS.BUTTON.GREEN,
};

const redButtonProps = {
    type: BUTTON_TYPES.BUTTON,
    disabled: false,
    onClick: () => { },
    text: TEXTS.BUTTON.DELETE,
    color: COLORS.BUTTON.RED,
};

describe('Button component', () => {
    it('should render green Button component', () => {
        const component = renderer.create(<Button {...greenButtonProps} />).toJSON();
        expect(component).toHaveStyleRule('background-color', '#00AB00');
        expect(component).toMatchSnapshot();
    });

    it('should render red Button component', () => {
        const component = renderer.create(<Button {...redButtonProps} />).toJSON();
        expect(component).toHaveStyleRule('background-color', '#FF0000');
        expect(component).toMatchSnapshot();
    });

    it('should call onClick method', () => {
        const mockCallBack = jest.fn();
        const component = shallow(
            <Button
                onClick={mockCallBack}
                type={BUTTON_TYPES.BUTTON}
                disabled={false}
                text={TEXTS.BUTTON.BACK}
                color={COLORS.BUTTON.RED}
            />
        );
        expect(mockCallBack.mock.calls.length).toBe(0);
        component.simulate('click');
        expect(mockCallBack.mock.calls.length).toBe(1);
    });
});
