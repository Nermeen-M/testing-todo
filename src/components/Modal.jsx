import { createPortal } from "react-dom";

export default function Modal({ modalState }) {
  const [modal, setModal] = modalState;

  let HTMLElement = document.getElementById("portal");
  if (!HTMLElement) {
    HTMLElement = document.createElement("div");
    HTMLElement.setAttribute("id", "HTMLElement");
    document.body.appendChild(HTMLElement);
  }

  if (modal === null) return null;

  return createPortal(
    <div id="modal">
      <div
        className="backdrop"
        onClick={() => setModal(null)}
        data-testid="backdrop"
      ></div>
      <div className="window">{modal}</div>
    </div>,
    HTMLElement
  );
}
