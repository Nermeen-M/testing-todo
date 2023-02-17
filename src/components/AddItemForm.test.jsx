import { render, screen, fireEvent } from "@testing-library/react";

import AddItemForm from "./AddItemForm";

test("should render AddItemForm component in the modal", () => {
  //Arrange
  const setModal = () => {};
  render(<AddItemForm setModal={setModal} />);

  //Act
  const titleElement = screen.getByText("Create new item");

  //Assert
  expect(titleElement).toBeInTheDocument();
});

test("should not show any error message when the component is loaded", () => {
  //Arrange
  const setModal = () => {};
  render(<AddItemForm setModal={setModal} />);

  //Act
  const nameErrorMessage = screen.queryByText("Please enter a valid name.");
  const priceErrorMessage = screen.queryByText("Please enter a valid price.");

  //Assert
  expect(nameErrorMessage).not.toBeInTheDocument();
  expect(priceErrorMessage).not.toBeInTheDocument();
});

// test("should show error message if name is empty", () => {
//   //Arrange
//   const setModal = () => {};
//   render(<AddItemForm setModal={setModal} />);

//   //Act
//   const inputElement = screen.getByPlaceholderText("Item name");

//   fireEvent.change(inputElement, {
//     target: { value: "" },
//   });

//   //Assert
//   const errorMessage = screen.getByText("Please enter a valid name.");
//   expect(errorMessage).toBeInTheDocument();
// });
