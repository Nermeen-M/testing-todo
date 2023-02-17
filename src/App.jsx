import { useState } from "react";

import { useItems } from "./state/ItemsContext";
import WelcomeScreen from "./screens/WelcomeScreen";
import ShoppingScreen from "./screens/ShoppingScreen";
import Modal from "./components/Modal";

import Logo from "./assets/images/logo.svg";

import "./assets/styles/style.scss";

export default function App() {
  const { items } = useItems();

  const [modal, setModal] = useState(null);

  return (
    <div className="App">
      <header>
        <img
          className="logo"
          src={Logo}
          alt="The word EIKA on a blue background"
        />
      </header>

      {items.length === 0 && <WelcomeScreen setModal={setModal} />}
      {items.length > 0 && <ShoppingScreen setModal={setModal} />}

      <Modal modalState={[modal, setModal]} />
    </div>
  );
}
