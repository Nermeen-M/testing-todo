import { useState } from "react";

import Modal from "./components/Modal";
import WelcomeScreen from "./screens/WelcomeScreen";

import Logo from "./assets/images/logo.svg";

import "./assets/styles/style.scss";

export default function App() {
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

      <WelcomeScreen setModal={setModal} />
      <Modal modalState={[modal, setModal]} />
    </div>
  );
}
