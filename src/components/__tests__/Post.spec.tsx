import React from "react";
import { render } from "@testing-library/react";
import Common from "components/common";

const props = {
  title: "title",
  tags: ["tag1", "tag2"],
  date: "date",
};

describe("<Post/>", () => {
  it("should be render", () => {
    const { container, getByText } = render(<Common.Post {...props} />);
    const tags = container.getElementsByClassName("tags")[0];

    expect(getByText(props.title)).toBeInTheDocument();
    expect(getByText(props.date)).toBeInTheDocument();
    expect(tags.childElementCount).toEqual(props.tags.length);
  });
});
