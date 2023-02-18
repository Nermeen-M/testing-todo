import { render, screen } from "@testing-library/react";
import Modal from "./Modal";

test("modal shows the passed html element", () => {
  // Arrange
  const setModal = jest.fn();
  const modal = <div>Test value</div>;
  render(<Modal modalState={[modal, setModal]} />);

  // Act
  const htmlElement = screen.getByText("Test value");

  // Assert
  expect(htmlElement).toBeInTheDocument();
});
