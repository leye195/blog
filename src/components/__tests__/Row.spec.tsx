import React from "react";
import { render } from "@testing-library/react";
import Common from "components/common";

const props = {
  alignItems: "flex-start",
  justifyContents: "center",
  className: "row",
};

describe("<Row/>", () => {
  it("should be render", () => {
    const { container, getByText } = render(
      <Common.Row {...props}>
        <p>row test</p>
      </Common.Row>
    );

    expect(
      container.getElementsByClassName(props.className)[0]
    ).toBeInTheDocument();
    expect(getByText("row test")).toBeInTheDocument();
  });
});
