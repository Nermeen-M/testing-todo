import { sortByName, sortByPrice } from "./sorting";

test("sort items by name (ascending)", () => {
  //Arrange
  const testItems = [
    { name: "a", price: 50 },
    { name: "z", price: 100 },
    { name: "b", price: 75 },
  ];

  const ascending = true;

  const result = [
    { name: "a", price: 50 },
    { name: "b", price: 75 },
    { name: "z", price: 100 },
  ];

  //Act
  const sorted = sortByName(testItems, ascending);

  //Assert
  expect(sorted).toEqual(result);
});

test("sort items by name (descending)", () => {
  //Arrange
  const testItems = [
    { name: "a", price: 50 },
    { name: "z", price: 100 },
    { name: "b", price: 75 },
  ];

  const ascending = false;

  const result = [
    { name: "z", price: 100 },
    { name: "b", price: 75 },
    { name: "a", price: 50 },
  ];

  //Act
  const sorted = sortByName(testItems, ascending);

  //Assert
  expect(sorted).toEqual(result);
});

test("sort items by price (ascending)", () => {
  //Arrange
  const testItems = [
    { name: "a", price: 50 },
    { name: "z", price: 100 },
    { name: "b", price: 75 },
  ];

  const ascending = true;

  const result = [
    { name: "a", price: 50 },
    { name: "b", price: 75 },
    { name: "z", price: 100 },
  ];

  //Act
  const sorted = sortByPrice(testItems, ascending);

  //Assert
  expect(sorted).toEqual(result);
});

test("sort items by price (descending)", () => {
  //Arrange
  const testItems = [
    { name: "a", price: 50 },
    { name: "z", price: 100 },
    { name: "b", price: 75 },
  ];

  const ascending = false;

  const result = [
    { name: "z", price: 100 },
    { name: "b", price: 75 },
    { name: "a", price: 50 },
  ];

  //Act
  const sorted = sortByPrice(testItems, ascending);

  //Assert
  expect(sorted).toEqual(result);
});
