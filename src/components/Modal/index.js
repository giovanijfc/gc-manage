import React from "react";
import ReactModal from "react-modal";

const customStyles = {
  display: "flex",
  top: "50%",
  left: "50%",
  right: "auto",
  bottom: "auto",
  marginRight: "-50%",
  transform: "translate(-50%, -50%)",
  border: 0,
  borderRadius: "4px",
};

const Modal = ({
  children,
  isOpen,
  onAfterOpen,
  onRequestClose,
  ...propsModal
}) => {
  return (
    <ReactModal
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
      style={{
        content: {
          ...customStyles,
          ...propsModal.style,
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        },
      }}
      isOpen={isOpen}
    >
      {children}
    </ReactModal>
  );
};
export default Modal;
