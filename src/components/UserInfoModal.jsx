import { useState } from "react";
import Modal from "react-modal";
import UserInfo from "./UserInfo";
import UserInfoDetail from "./UserInfoDetail";
import UserInfoIcon from "../assets/userinfo-icon.png";
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

const UserInfoModal = ({ by, isIcon, isOwnUser = false }) => {
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
      {isOwnUser ? (
        <div
          onClick={openModal}
          style={{
            width: "20px",
            height: "20px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src={UserInfoIcon} alt="" />
        </div>
      ) : (
        <UserInfo by={by} onClick={openModal} isIcon={isIcon} />
      )}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="User Modal"
      >
        <UserInfoDetail by={by} closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default UserInfoModal;
