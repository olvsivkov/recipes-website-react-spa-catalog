import React, { useState } from "react";
import "../index.css"

function MyModal() {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      {modalIsOpen ? (
        <div className="modal-overlay">
          <div className="modal">
            <h5>Категория не найдена</h5>
            <button onClick={closeModal}>ОК</button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export {MyModal};