import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "..";

afterEach(cleanup);

describe("Contact component", () => {
  //baseline test
  it("renders", () => {
    render(<Contact />);
  });
  //snapshot test
  it("matches the snapshot", () => {
    const { asFragment } = render(<Contact />);
    expect(asFragment()).toMatchSnapshot();
  });

  describe("Labels and text", () => {
    it("renders the right H1 and Submit button texts", () => {
      const { getByTestId } = render(<Contact />);

      expect(getByTestId("contact")).toHaveTextContent("Contact me");
      expect(getByTestId("submit")).toHaveTextContent("Submit");
    });
  });
});
