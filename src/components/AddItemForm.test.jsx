import { render, screen, fireEvent } from "@testing-library/react";

import AddItemForm from "./AddItemForm";

import { ItemsProvider } from "../state/ItemsContext";

test("should not show any error message when the component is loaded", () => {
  //Arrange
  const setModal = jest.fn();
  render(<AddItemForm setModal={setModal} />, { wrapper: ItemsProvider });

  //Act
  const nameErrorMessage = screen.queryByText("Please enter a valid name.");
  const priceErrorMessage = screen.queryByText("Please enter a valid price.");

  //Assert
  expect(nameErrorMessage).not.toBeInTheDocument();
  expect(priceErrorMessage).not.toBeInTheDocument();
});

test("should have Submit button disabled by default", () => {
  //Arrange
  const setModal = jest.fn();
  render(<AddItemForm setModal={setModal} />, { wrapper: ItemsProvider });

  //Act
  const buttonElement = screen.getByText("Submit");

  //Assert
  expect(buttonElement).toBeDisabled();
});

test("should show error message if name is empty", () => {
  //Arrange
  const setModal = jest.fn();
  render(<AddItemForm setModal={setModal} />, { wrapper: ItemsProvider });

  //Act
  const inputElement = screen.getByLabelText("Item name");

  fireEvent.change(inputElement, {
    target: { value: "" },
  });
  fireEvent.focusOut(inputElement);

  //Assert
  const errorMessage = screen.getByText("Please enter a valid name.");
  expect(errorMessage).toBeInTheDocument();
});

test("should show error message if price is empty", () => {
  //Arrange
  const setModal = jest.fn();
  render(<AddItemForm setModal={setModal} />, { wrapper: ItemsProvider });

  //Act
  const inputElement = screen.getByLabelText("Price");

  fireEvent.change(inputElement, {
    target: { value: "" },
  });
  fireEvent.focusOut(inputElement);

  //Assert
  const errorMessage = screen.getByText("Please enter a valid price.");
  expect(errorMessage).toBeInTheDocument();
});

test("should show error message if price is less than 1", () => {
  //Arrange
  const setModal = jest.fn();
  render(<AddItemForm setModal={setModal} />, { wrapper: ItemsProvider });

  //Act
  const inputElement = screen.getByLabelText("Price");

  fireEvent.change(inputElement, {
    target: { value: "-1" },
  });
  fireEvent.focusOut(inputElement);

  //Assert
  const errorMessage = screen.getByText("Please enter a valid price.");
  expect(errorMessage).toBeInTheDocument();
});

test("should have Submit button enabled if the inputs are valid", () => {
  //Arrange
  const setModal = jest.fn();
  render(<AddItemForm setModal={setModal} />, { wrapper: ItemsProvider });

  //Act
  const nameInput = screen.getByLabelText("Item name");
  const priceInput = screen.getByLabelText("Price");

  fireEvent.change(nameInput, {
    target: { value: "Chair" },
  });

  fireEvent.change(priceInput, {
    target: { value: "50" },
  });
  const buttonElement = screen.getByText("Submit");

  //Assert
  expect(buttonElement).toBeEnabled();
});
