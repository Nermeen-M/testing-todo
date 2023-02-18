import { createContext, useContext, useEffect, useState } from "react";
import { getData, setData } from "../scripts/storeData";

const Context = createContext(null);

export function ItemsProvider({ children }) {
  const storageKey = "testing-todo";

  const [items, setItems] = useState(getData(storageKey));
  const value = { items, setItems };

  useEffect(() => setData(storageKey, items), [items]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useItems() {
  const context = useContext(Context);
  const errorMessage = "To use The Items Context import it on index.js";

  if (!context) throw new Error(errorMessage);

  return context;
}
