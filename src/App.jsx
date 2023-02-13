import { useState } from "react";

import Modal from "./components/Modal";
import WelcomeScreen from "./screens/WelcomeScreen";

export default function App() {
  const [modal, setModal] = useState(null);

  return (
    <div className="App">
      <WelcomeScreen setModal={setModal} />
      <Modal modalState={[modal, setModal]} />
    </div>
  );
}
