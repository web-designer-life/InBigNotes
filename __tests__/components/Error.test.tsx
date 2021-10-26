import React from 'react';
import { shallow } from 'enzyme';
import Error from '../../src/components/Error';

const errorProps = {
    navigateToPage: () => { },
};

describe('Error component', () => {
    it('should render Error component', () => {
        const component = shallow(<Error {...errorProps} />);

        expect(component).toMatchSnapshot();
    });
});
