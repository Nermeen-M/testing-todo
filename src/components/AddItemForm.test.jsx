import { render, screen, fireEvent } from "@testing-library/react";

import AddItemForm from "./AddItemForm";

test("should render AddItemForm component in the modal", async () => {
  //Arrange
  // const setModal = () => {};
  const setModal = jest.fn();
  render(<AddItemForm setModal={setModal} />);

  //Act
  const titleElement = screen.getByText("Create new item");

  //Assert
  expect(titleElement).toBeInTheDocument();
});

// test("should not show any error message when the component is loaded", () => {
//   //Arrange
//   const setModal = () => {};
//   render(<AddItemForm setModal={setModal} />);

//   //Act
//   const nameErrorMessage = screen.queryByText("Please enter a valid name.");
//   const priceErrorMessage = screen.queryByText("Please enter a valid price.");

//   //Assert
//   expect(nameErrorMessage).not.toBeInTheDocument();
//   expect(priceErrorMessage).not.toBeInTheDocument();
// });

// test("should show error message if name is empty", async () => {
//   //Arrange
//   const setModal = () => {};
//   render(<AddItemForm setModal={setModal} />);

//   //Act
//   const inputElement = screen.getByRole("textbox", {
//     name: /item name/i,
//   });

//   // fireEvent.change(inputElement, {
//   //   target: { value: "" },
//   // });
//   await user.click(inputElement);

//   //Assert
//   const errorMessage = screen.getByText(/please enter a valid name\./i);
//   expect(errorMessage).toBeInTheDocument();
// });
