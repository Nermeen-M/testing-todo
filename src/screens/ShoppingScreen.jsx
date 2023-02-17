import { useState } from "react";

import TodoList from "../components/TodoList";
import AddItemForm from "../components/AddItemForm";
import Sorter from "../components/Sorter";

import { useItems } from "../state/ItemsContext";

export default function ShoppingScreen({ setModal }) {
  const { items, setItems } = useItems();

  const [showAdquired, setShowAdquired] = useState(false);

  const adquiredItems = items.filter((item) => item.isCompleted === true);
  const pendingItems = items.filter((item) => item.isCompleted === false);

  function onCheck(id) {
    const clonedItems = [...items];
    const editedItem = clonedItems.find((item) => item.id === id);

    editedItem.isCompleted = !editedItem.isCompleted;
    setItems(clonedItems);
  }

  return (
    <div id="shopping-screen">
      <h1>Shopping Screen</h1>
      <Sorter />
      <TodoList items={pendingItems} onCheck={onCheck} />
      <div className="buttons">
        <button onClick={() => setModal(<AddItemForm setModal={setModal} />)}>
          Add a new item
        </button>
        <button
          className="secondary"
          onClick={() => setShowAdquired(!showAdquired)}
        >
          Show hidden items
        </button>
      </div>
      {showAdquired && <TodoList items={adquiredItems} onCheck={onCheck} />}
    </div>
  );
}
