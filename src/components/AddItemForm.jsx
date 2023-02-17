import { useItems } from "../state/ItemsContext";
import { validateName, validatePrice } from "../scripts/validateInputs";
import useInput from "../scripts/hooks/useInput";

export default function AddItemForm({ setModal }) {
  const { items, setItems } = useItems();

  const {
    value: nameValue,
    valueIsValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput(validateName);

  const {
    value: priceValue,
    valueIsValid: priceIsValid,
    hasError: priceHasError,
    valueChangeHandler: priceChangeHandler,
    inputBlurHandler: priceBlurHandler,
    reset: priceReset,
  } = useInput(validatePrice);

  let formIsValid = false;

  if (nameIsValid && priceIsValid) {
    formIsValid = true;
  }

  function submitHandler(event) {
    const newItem = {
      id: items.length,
      name: nameValue,
      price: priceValue,
      isCompleted: false,
    };

    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    // console.log("Submitted!");
    // console.log(nameValue, priceValue);

    nameReset();
    priceReset();

    setItems([...items, newItem]);
    setModal(null);
  }

  return (
    <form className="form" onSubmit={submitHandler}>
      <h2>Create new item</h2>
      <div className="form-field">
        <label htmlFor="name">Item name</label>
        <input
          id="name"
          type="text"
          value={nameValue}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          placeholder="Item name"
        />
        {nameHasError && <p className="error">Please enter a valid name.</p>}
      </div>
      <div className="form-field">
        <label htmlFor="price">Price</label>
        <input
          id="price"
          type="number"
          value={priceValue}
          onChange={priceChangeHandler}
          onBlur={priceBlurHandler}
          placeholder="Item price"
        />
        {priceHasError && <p className="error">Please enter a valid price.</p>}
      </div>
      <div className="actions">
        <button
          className="primary-button"
          type="submit"
          disabled={!formIsValid}
        >
          Submit
        </button>
        <button className="secondary-button" onClick={() => setModal(null)}>
          Cancel
        </button>
      </div>
    </form>
  );
}
