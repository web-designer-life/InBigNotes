import React from 'react'
import Error from '../../components/Error';
import { shallow } from 'enzyme';

const errorProps = {
    navigateToPage: () => {},
};

describe('Error component', () => {
    it('should render Error component', () => {
        const component = shallow(<Error {...errorProps} />);
        expect(component).toMatchSnapshot();
    });
});
