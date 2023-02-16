import { useState } from "react";

export default function AddItemForm({ setModal }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [nameIsValid, setNameIsValid] = useState(true);
  const [priceIsValid, setPriceIsValid] = useState(true);

  function nameChangeHandler(event) {
    setName(event.target.value);
    if (name.trim().length === 0) {
      setNameIsValid(false);
    }
    setNameIsValid(true);
  }

  function priceChangeHandler(event) {
    setPrice(event.target.value);
    if (price.trim().length === 0 || price < 1) {
      setPriceIsValid(false);
    }
    setPriceIsValid(true);
  }

  function submitHandler(event) {
    event.preventDefault();
    if (name.trim().length === 0) {
      setNameIsValid(false);
      return;
    }
    if (price.trim().length === 0 || price < 1) {
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
      <div className="form-actions">
        <button className="btn primary-btn" type="submit">
          Add
        </button>
        <button className="btn secondary-btn" onClick={() => setModal(null)}>
          Cancel
        </button>
      </div>
    </form>
  );
}
