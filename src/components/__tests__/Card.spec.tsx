import React from "react";
import { render } from "@testing-library/react";
import Card from "components/me/Card";

const props = {
  title: "card title",
  description: "card description",
};

describe("<Card/>", () => {
  it("should be render", () => {
    const { getByText } = render(<Card {...props} />);

    expect(getByText(props.title)).toBeInTheDocument();
    expect(getByText(props.description)).toBeInTheDocument();
  });
});
