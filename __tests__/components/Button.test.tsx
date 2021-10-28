import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import 'jest-styled-components';
import BUTTON_TYPES from '../../src/components/Button/types';
import Button from '../../src/components/Button';
import {
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

    describe('handlers', () => {
        describe('onClick', () => {
            it('should call method', () => {
                const mockCallBack = jest.fn();
                const component = mount(
                    <Button
                        type={BUTTON_TYPES.BUTTON}
                        disabled={false}
                        onClick={mockCallBack}
                        text={TEXTS.BUTTON.DELETE}
                        color={COLORS.BUTTON.RED}
                    />
                );

                component.simulate('click');

                expect(mockCallBack.mock.calls.length).toEqual(1);
            });
        });
    });
});
