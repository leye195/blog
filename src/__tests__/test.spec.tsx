import * as React from "react";
import { render } from "@testing-library/react";

// You have to write data-testid

const Title = () => <h1 data-testid="hero-title">Gatsby is awesome!</h1>;

describe("Header", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<Title />);
    expect(getByTestId("hero-title")).toHaveTextContent("Gatsby is awesome!");
  });
});
