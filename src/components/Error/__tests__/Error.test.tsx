import React from 'react';
import { shallow } from 'enzyme';
import Error from '..';

const errorProps = {
    navigateToPage: () => { },
};

describe('Error component', () => {
    it('should render Error component', () => {
        const component = shallow(<Error {...errorProps} />);

        expect(component).toMatchSnapshot();
    });
});
