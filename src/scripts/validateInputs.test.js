import { validateName, validatePrice } from "./validateInputs";

test("name is not empty", () => {
  //Arrange
  const testValue = "";

  //Act
  const result = validateName(testValue);

  //Assert
  expect(result).toBe(false);
});

test("name is not mutiple space", () => {
  //Arrange
  const testValue = "   ";

  //Act
  const result = validateName(testValue);

  //Assert
  expect(result).toBe(false);
});

test("name is valid", () => {
  //Arrange
  const testValue = "Table";

  //Act
  const result = validateName(testValue);

  //Assert
  expect(result).toBe(true);
});

test("price is not empty", () => {
  //Arrange
  const testValue = "";

  //Act
  const result = validatePrice(testValue);

  //Assert
  expect(result).toBe(false);
});

test("price is not less than 1", () => {
  //Arrange
  const testValue = "0";

  //Act
  const result = validatePrice(testValue);

  //Assert
  expect(result).toBe(false);
});

test("price is valid", () => {
  //Arrange
  const testValue = "100";

  //Act
  const result = validatePrice(testValue);

  //Assert
  expect(result).toBe(true);
});
