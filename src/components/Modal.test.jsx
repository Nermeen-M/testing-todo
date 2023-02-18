import { render, screen } from "@testing-library/react";
import { useState } from "react";
import App from "../App";
import Modal from "./Modal";

// test("modal is not displayed by default", () => {
//   // Arrange
//   render(<App />);

//   // Act
//   const modalElement = screen.querySelector("#modal");

//   // Assert
//   expect(modalElement).toBeNull();
// });

// test("modal shows the html element", () => {
//   // Arrange
//   const setModal = jest.fn();
//   const modal = <div>test</div>;

//   render(<App />);
//   render(<Modal modalState={[modal, setModal]} />);

//   // Act
//   const htmlElement = screen.getByText("test");

//   // Assert
//   expect(htmlElement).toBeInTheDocument();
// });

// test("Modal close when press on backdrop", () => {
//   // Arrange
// //   const setModal = jest.fn();
// //   const modal = <div>test</div>;
//   const handleClose = jest.fn();

//   //   render(<Modal modalState={[modal, setModal]} />);
//   render(<App />);

//   // Act
//   const modalElement = screen.queryByTestId("modal");
//   const backdropElement = modalElement.firstChild;
//   fireEvent.click(backdropElement);

//   // Assert
//   expect(handleClose).toBeCalled();
// });
