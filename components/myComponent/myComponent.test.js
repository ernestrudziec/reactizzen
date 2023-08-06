import React from "react";
import { shallow } from "enzyme";
import MyComponent from "./myComponent";

describe("MyComponent", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
