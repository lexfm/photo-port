import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

afterEach(cleanup);

describe("Nav component", () => {
  //baseline test
  it("renders", () => {
    render(<Nav />);
  });
  //snapshot test
  it("matches the snapshot", () => {
    const { asFragment } = render(<Nav />);
    expect(asFragment()).toMatchSnapshot();
  });

  describe("emoji is visible", () => {
    it("inserts emoji in h2", () => {
      const { getByLabelText } = render(<Nav />);
      expect(getByLabelText("camera")).toHaveTextContent("📸");
    });
  });

  describe("links are visible", () => {
    it("inserts text into the links", () => {
      const { getByTestId } = render(<Nav />);
      expect(getByTestId("link")).toHaveTextContent("Oh Snap!");
      expect(getByTestId("about")).toHaveTextContent("About me");
    });
  });
});
