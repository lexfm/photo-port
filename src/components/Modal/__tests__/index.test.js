import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Modal from "..";

afterEach(cleanup);

const currentPhoto = {
  name: "Park bench",
  category: "landscape",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
  index: 1,
};

const toggleModalMock = jest.fn();

const modalComp = (
  <Modal currentPhoto={currentPhoto} onClose={toggleModalMock} />
);

describe("Modal component", () => {
  //baseline test
  it("renders", () => {
    render(modalComp);
  });
  //snapshot test
  it("matches the snapshot for DOM node structure", () => {
    const { asFragment } = render(modalComp);
    expect(asFragment()).toMatchSnapshot();
  });

  describe("Click Event", () => {
    it("calls onClose handler", () => {
      // Arrange: Render Modal
      const { getByText } = render(modalComp);
      // Act: Simulate click event
      fireEvent.click(getByText("Close this modal"));
      // Assert: Expected matcher

      expect(toggleModalMock).toHaveBeenCalledTimes(1);
    });
  });

  // describe("Labels and text", () => {
  //   it("renders the right H1 and Submit button texts", () => {
  //     const { getByTestId } = render(<Contact />);

  //     expect(getByTestId("contact")).toHaveTextContent("Contact me");
  //     expect(getByTestId("submit")).toHaveTextContent("Submit");
  //   });
  // })
});
