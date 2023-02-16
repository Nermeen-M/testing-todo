import { useState } from "react";
import { validateName, validatePrice } from "../scripts/validateInputs";

export default function AddItemForm({ setModal }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [nameIsValid, setNameIsValid] = useState(true);
  const [priceIsValid, setPriceIsValid] = useState(true);

  function nameChangeHandler(event) {
    setName(event.target.value);

    const isValid = validateName(event.target.value);

    setNameIsValid(isValid);
  }

  function priceChangeHandler(event) {
    setPrice(event.target.value);

    const isValid = validatePrice(event.target.value);

    setPriceIsValid(isValid);
  }

  function submitHandler(event) {
    event.preventDefault();

    if (!validateName(name)) {
      setNameIsValid(false);
      return;
    }

    if (!validatePrice(price)) {
      setPriceIsValid(false);
      return;
    }

    setNameIsValid(true);
    setPriceIsValid(true);

    // dataCtx.onAddItem(name, price);
    // {
    //   props.redirect && dataCtx.navigateToShoppingList();
    // }

    setName("");
    setPrice("");
    // dataCtx.onCloseModal();
  }

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="form-field">
        <label htmlFor="item-name">Item name</label>
        <input
          id="item-name"
          type="text"
          value={name}
          onChange={nameChangeHandler}
          placeholder="Item name"
        />
        {!nameIsValid && <p className="error">Please enter a valid name.</p>}
      </div>
      <div className="form-field">
        <label htmlFor="item-price">Price</label>
        <input
          id="item-price"
          type="number"
          value={price}
          onChange={priceChangeHandler}
          placeholder="Item price"
        />
        {!priceIsValid && <p className="error">Please enter a valid price.</p>}
      </div>
      <div className="actions">
        <button className="primary-button" type="submit">
          Submit
        </button>
        <button className="secondary-button" onClick={() => setModal(null)}>
          Cancel
        </button>
      </div>
    </form>
  );
}
