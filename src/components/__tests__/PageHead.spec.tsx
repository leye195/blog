import React from "react";
import { render } from "@testing-library/react";
import Common from "components/common";

const props = {
  imgURL: "url",
  className: "page-head",
};

describe("<PageHead/>", () => {
  it("should be render", () => {
    const { container } = render(<Common.PageHead {...props} />);
    const pageHeadSection = container.getElementsByClassName(
      props.className
    )[0];
    const img = container.getElementsByClassName("bg-image")[0];

    expect(pageHeadSection).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });
});
