import { useState } from "react";

import TodoList from "../components/TodoList";
import AddItemForm from "../components/AddItemForm";
import Sorter from "../components/Sorter";

import { useItems } from "../state/ItemsContext";

export default function ShoppingScreen({ setModal }) {
  const { items, setItems } = useItems();

  const [showCompleted, setShowCompleted] = useState(false);

  const completedItems = items.filter((item) => item.isCompleted === true);
  const pendingItems = items.filter((item) => item.isCompleted === false);

  function onCheck(id) {
    const clonedItems = [...items];
    const editedItem = clonedItems.find((item) => item.id === id);

    editedItem.isCompleted = !editedItem.isCompleted;
    setItems(clonedItems);
  }

  return (
    <div id="shopping-screen">
      <h1>Shopping list</h1>
      <Sorter />
      <TodoList items={pendingItems} onCheck={onCheck} />
      <div className="buttons">
        <button
          className="primary-button"
          onClick={() => setModal(<AddItemForm setModal={setModal} />)}
        >
          Add item
        </button>
        <button
          className="secondary-button"
          onClick={() => setShowCompleted(!showCompleted)}
        >
          {showCompleted ? "Hide completed items" : "View completed items"}
        </button>
      </div>
      {showCompleted && <TodoList items={completedItems} onCheck={onCheck} />}
    </div>
  );
}
