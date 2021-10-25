import React from 'react';
import { shallow } from 'enzyme';
import Filter from '../../src/components/Filter';

const filterProps = {
    filterType: 'title',
    fetchNotes: (filterType: string) => Function,
    filterAction: (filterType: string) => Function,
};

describe('Filter component', () => {
    it('should render Filter component', () => {
        const component = shallow(<Filter {...filterProps} />);
        expect(component).toMatchSnapshot();
    });
});
