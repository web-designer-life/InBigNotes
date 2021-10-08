import React from 'react'
import Loader from '../../components/Loader';
import { shallow } from 'enzyme';

describe('Loader component', () => {
    it('should render Loader component', () => {
        const component = shallow(<Loader />);
        expect(component).toMatchSnapshot();
    });
});
