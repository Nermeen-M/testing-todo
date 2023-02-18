import { render, screen, fireEvent } from "@testing-library/react";

import { ItemsProvider } from "../state/ItemsContext";
import ShoppingScreen from "./ShoppingScreen";
import AddItemForm from "../components/AddItemForm";

test("should render 'View completed items' button when open the page", () => {
  //Arrange
  const setModal = jest.fn();
  render(<ShoppingScreen setModal={setModal} />, { wrapper: ItemsProvider });

  //Act
  const titleElement = screen.getByText("View completed items");

  //Assert
  expect(titleElement).toBeInTheDocument();
});

test("should toggle button text when press on 'View completed items'", () => {
  //Arrange
  const setModal = jest.fn();

  render(<ShoppingScreen setModal={setModal} />, { wrapper: ItemsProvider });

  //Act
  const buttonElement = screen.getByText("View completed items");
  fireEvent.click(buttonElement);

  //Assert
  const toggledButtonText = screen.getByText("Hide completed items");
  expect(toggledButtonText).toBeInTheDocument();
});

test("should open the modal when click on 'Add item' button", () => {
  //Arrange
  const setModal = () => {};
  render(<ShoppingScreen setModal={setModal} />, { wrapper: ItemsProvider });

  //Act
  const buttonElement = screen.getByText("Add item");
  fireEvent.click(buttonElement);

  const { getByText } = render(<AddItemForm setModal={setModal} />, {
    wrapper: ItemsProvider,
  });

  //Assert
  expect(getByText("Create new item")).toBeInTheDocument();
});
