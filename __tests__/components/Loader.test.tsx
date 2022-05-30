import React from 'react';
import { shallow } from 'enzyme';
import Loader from '../../src/components/Loader';

describe('Loader component', () => {
    it('should render Loader component', () => {
        const component = shallow(<Loader />);

        expect(component).toMatchSnapshot();
    });
});
