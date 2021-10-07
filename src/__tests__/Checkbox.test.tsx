import React from 'react'
import Checkbox from '../components/Checkbox';
import { shallow } from 'enzyme';

const checkboxProps = {
    checked: true,
    onChange: () => {},
};

const setUp = () => shallow(<Checkbox {...checkboxProps} />);

describe("Checkbox component", () => {
    let component: any;
    let instance: any;

    beforeEach(() => {
        component = setUp();
        instance = component.instance();
    });
        
    describe("Has props", () => {
        it("should render Checkbox component", () => {
            expect(component).toMatchSnapshot();
        });
    });
});
