import { useState } from "react";

const Modal = ({buttonText, modalContent, includeCloseButton}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleContainerClick = (e) => {
    // Verifica si el click no se hizo desde el ModalContent
    if (e.currentTarget === e.target) {
      handleModalClose();
    }
  };

  return (
    <>
      <button
        className="bg-secondary-500 text-white px-4 py-2 rounded"
        onClick={handleModalOpen}
      >
       {buttonText}
      </button>
      {modalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-20"
          onClick={handleContainerClick}
        >
          <div className="bg-white w-auto min-h-48 p-8 md:py-8 md:px-10 rounded text-center ">
            {modalContent}
            {
                includeCloseButton &&             
                <button
                    className="bg-red-500 text-white px-4 py-2 mt-4 rounded"
                    onClick={handleModalClose}
                >
                    Cerrar
                </button>
            }
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
