import React from 'react'
import Error from '../../components/Error';
import { shallow } from 'enzyme';

const setUp = () => shallow(<Error />);

describe('Error component', () => {
    let component: any;
    let instance: any;

    beforeEach(() => {
        component = setUp();
        instance = component.instance();
    });
        
    describe('Has props', () => {
        it('should render Error component', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('Error handlers', () => {
        it('should call onClick method', () => {
            const result = instance.handleNavigateToHome();
            expect(result).toBe(undefined);
        });
    });
});
