import React from "react";
import Loader from "./Loader";
import renderer from 'react-test-renderer';

describe("Loader component", () => {
    it("should render Loader component", () => {
        const component = renderer.create(<Loader />).toJSON();
        expect(component).toMatchSnapshot();
    });
});
