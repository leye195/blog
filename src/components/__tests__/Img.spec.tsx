import React from "react";
import { render } from "@testing-library/react";
import Common from "components/common";

const props = {
  src: "image-source",
  alt: "image-text",
};

describe("<Img/>", () => {
  it("should be render", () => {
    const { getByAltText } = render(<Common.Img {...props} />);
    const img = getByAltText(props.alt);

    expect(img).toHaveAttribute("src", props.src);
  });
});
