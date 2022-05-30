import React from 'react';
import { mount, shallow } from 'enzyme';
import Filter from '../../src/components/Filter';

const filterProps = {
    filterType: 'title',
    fetchNotes: (filterType: string) => Function,
    filterAction: (filterType: string) => Function,
};

const filterPropsAfterChangeFilterType = {
    filterType: 'created_at',
    fetchNotes: (filterType: string) => Function,
    filterAction: (filterType: string) => Function,
};

describe('Filter component', () => {
    it('should render Filter component', () => {
        const component = shallow(<Filter {...filterProps} />);

        expect(component).toMatchSnapshot();
    });

    describe('handlers', () => {
        describe('handleChangeFilter', () => {
            it('change filterType', () => {
                const component = mount(<Filter {...filterProps} />);

                const select = component.find('select').first();
                select.simulate('change', { preventDefault: jest.fn, target: { value: 'created_at' } });

                expect(component).toMatchSnapshot();
            });
        });
    });
});
