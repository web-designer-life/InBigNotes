import React from 'react';
import { mount, shallow } from 'enzyme';
import ErrorContainer from '../../src/containers/ErrorContainer/ErrorContainer';

const errorProps = {
    navigateToPageAction: (path: string) => Function,
};

describe('ErrorContainer', () => {
    it('should render ErrorContainer', () => {
        const component = shallow(<ErrorContainer {...errorProps} />);

        expect(component).toMatchSnapshot();
    });

    describe('handlers', () => {
        describe('handleNavigateToHome', () => {
            it('should call method', () => {
                const component = mount(<ErrorContainer {...errorProps} />);

                const createNoteButton = component.find('button[color="green"]').first();
                createNoteButton.simulate('click');

                expect(component).toMatchSnapshot();
            });
        });
    });
});
