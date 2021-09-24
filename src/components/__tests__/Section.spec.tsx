import React from "react";
import { render } from "@testing-library/react";
import Common from "components/common";

const props = {
  className: "section",
};

describe("<Section/>", () => {
  it("should be render", () => {
    const { container, getByText } = render(
      <Common.Section {...props}>
        <p>section test</p>
      </Common.Section>
    );

    expect(
      container.getElementsByClassName(props.className)[0]
    ).toBeInTheDocument();
    expect(getByText("section test")).toBeInTheDocument();
  });
});
