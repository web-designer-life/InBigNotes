import React from 'react'
import Error from '../Error/Error';
import { render } from 'enzyme';

describe("Error component", () => {
    describe("Has props", () => {
        it("should render Post component", () => {
            const component = render(<Error />);
            expect(component).toMatchSnapshot();
        });
    });
  
    describe("defaultProps", () => {
        it("should use default navigateToPage", () => {
            const result = Error.defaultProps.navigateToPage();
            expect(result).toBe(undefined);
        });
    });
});
