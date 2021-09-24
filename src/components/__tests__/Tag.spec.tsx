import React from "react";
import { render } from "@testing-library/react";
import Common from "components/common";

const props = {
  text: "tag",
  count: 1,
};

describe("<Tag/>", () => {
  it("should be render", () => {
    const { getByText } = render(<Common.Tag {...props} />);
    const tag = getByText(/tag/);

    expect(tag).toBeInTheDocument();
  });
});
