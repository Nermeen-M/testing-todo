export function validateName(name) {
  let result = true;

  if (name.trim().length === 0) result = false;

  return result;
}

export function validatePrice(price) {
  let result = true;

  if (price.trim().length === 0 || price < 1) result = false;

  return result;
}
