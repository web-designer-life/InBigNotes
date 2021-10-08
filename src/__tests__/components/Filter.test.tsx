import React from 'react'
import Filter from '../../components/Filter';
import { shallow } from 'enzyme';

const filterProps = {
    filter: 'title',
    fetchNotes: (filter: string) => Function,
    filterAction: (filter: string) => Function,
};

describe('Filter component', () => {
    it('should render Filter component', () => {
        const component = shallow(<Filter {...filterProps} />);
        expect(component).toMatchSnapshot();
    });
});
