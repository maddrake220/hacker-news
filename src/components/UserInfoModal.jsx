import { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { getUser } from "../utils/apis";
import UserInfo from "./UserInfo";
import UserInfoDetail from "./UserInfoDetail";

const customStyles = {
  overlay: {
    position: "fixed",
    backgroundColor: "rgba(0,0,0,0.75)",
    width: "395px",
    height: "860px",
    zIndex: 100,
  },
  content: {
    backgroundColor: "transparent",
    top: 0,
    left: 0,
    width: "355px",
    height: "860px",
    border: "none",
  },
};

const UserInfoModal = ({ by }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <UserInfo by={by} onClick={openModal} />
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>asd</h2>
        <button onClick={closeModal}>close</button> */}
        <UserInfoDetail by={by} closeModal={closeModal} />
        {/* <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form> */}
      </Modal>
    </div>
  );
};

export default UserInfoModal;
