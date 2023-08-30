import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

// Greet should render the text hello and if a name is passed into the component
// it should render hello followed by name

describe("Greet", () => {
  it("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });
});

describe("Nested", () => {
  it("renders with name", () => {
    render(<Greet name="Sandip" />);
    const textElement = screen.getByText("Hello Sandip");
    expect(textElement).toBeInTheDocument();
  });
});
