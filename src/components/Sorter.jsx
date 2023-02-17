import { useState } from "react";

import { useItems } from "../state/ItemsContext";
import { sortByName, sortByPrice } from "../scripts/sorting";

export default function Sorter() {
  const { items, setItems } = useItems();

  const [isAscending, setIsAscending] = useState(true);

  const clonedItems = [...items];

  function sortByNameHandler() {
    const sortedList = sortByName(clonedItems, isAscending);
    setItems(sortedList);
    setIsAscending(!isAscending);
  }
  function sortByPriceHandler() {
    const sortedList = sortByPrice(clonedItems, isAscending);
    setItems(sortedList);
    setIsAscending(!isAscending);
  }

  return (
    <section className="sorter">
      Sort by:
      <button className="secondary-button" onClick={sortByNameHandler}>
        Name
      </button>
      <button className="secondary-button" onClick={sortByPriceHandler}>
        Price
      </button>
    </section>
  );
}
