import { render, screen, fireEvent } from "@testing-library/react";

import WelcomeScreen from "./WelcomeScreen";
import { ItemsProvider } from "../state/ItemsContext";

import AddItemForm from "../components/AddItemForm";

test("should open the modal when click on 'Add item' button", () => {
  //Arrange
  const setModal = () => {};
  render(<WelcomeScreen setModal={setModal} />, { wrapper: ItemsProvider });

  //Act
  const buttonElement = screen.getByText("Add item");
  fireEvent.click(buttonElement);

  const { getByText } = render(<AddItemForm setModal={setModal} />, {
    wrapper: ItemsProvider,
  });

  //Assert
  expect(getByText("Create new item")).toBeInTheDocument();
});
