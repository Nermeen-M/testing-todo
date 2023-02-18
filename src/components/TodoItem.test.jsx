import { render, screen, fireEvent } from "@testing-library/react";

import TodoItem from "./TodoItem";

import { ItemsProvider } from "../state/ItemsContext";

test("should be unchecked if item is pending", () => {
  //Arrange
  const item = { id: 1, name: "Chair", price: 50, isCompleted: false };
  const onCheck = jest.fn();

  render(<TodoItem key={item.id} item={item} onCheck={onCheck} />, {
    wrapper: ItemsProvider,
  });

  //Act
  const checkboxElement = screen.getByRole("checkbox");

  //Assert
  expect(checkboxElement).not.toBeChecked();
});

test("should be checked if item is completed", () => {
  //Arrange
  const item = { id: 1, name: "Chair", price: 50, isCompleted: true };
  const onCheck = jest.fn();

  render(<TodoItem key={item.id} item={item} onCheck={onCheck} />, {
    wrapper: ItemsProvider,
  });

  //Act
  const checkboxElement = screen.getByRole("checkbox");

  //Assert
  expect(checkboxElement).toBeChecked();
});
