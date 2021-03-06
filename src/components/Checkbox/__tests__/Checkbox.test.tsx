import React from 'react';
import renderer from 'react-test-renderer';
import Checkbox from '..';

const activeCheckboxProps = {
    checked: true,
    onChange: () => { },
};

const inactiveCheckboxProps = {
    checked: false,
    onChange: () => { },
};

describe('Checkbox component', () => {
    it('should render active Checkbox component', () => {
        const component = renderer.create(<Checkbox {...activeCheckboxProps} />);

        expect(component).toMatchSnapshot();
    });

    it('should render inactive Checkbox component', () => {
        const component = renderer.create(<Checkbox {...inactiveCheckboxProps} />);

        expect(component).toMatchSnapshot();
    });
});
