import React from 'react'
import Checkbox from '../../components/Checkbox';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

const activeCheckboxProps = {
    checked: true,
    onChange: () => {},
};

const inactiveCheckboxProps = {
    checked: false,
    onChange: () => {},
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
