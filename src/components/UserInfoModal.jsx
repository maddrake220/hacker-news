import { useState } from "react";
import Modal from "react-modal";
import UserInfo from "./UserInfo";
import UserInfoDetail from "./UserInfoDetail";
const customStyles = {
  overlay: {
    position: "fixed",
    backgroundColor: "rgba(0,0,0,0.75)",
    width: "100vw",
    height: "100%",
    zIndex: 100,
  },
  content: {
    backgroundColor: "transparent",
    top: 0,
    left: 0,
    width: "100vw - 20px",
    height: "100%",
    border: "none",
  },
};

const UserInfoModal = ({ by, isIcon, isOwnUser = false }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
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
          <svg
            width="16"
            height="5"
            viewBox="0 0 16 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 0.5C0.9 0.5 0 1.4 0 2.5C0 3.6 0.9 4.5 2 4.5C3.1 4.5 4 3.6 4 2.5C4 1.4 3.1 0.5 2 0.5ZM14 0.5C12.9 0.5 12 1.4 12 2.5C12 3.6 12.9 4.5 14 4.5C15.1 4.5 16 3.6 16 2.5C16 1.4 15.1 0.5 14 0.5ZM8 0.5C6.9 0.5 6 1.4 6 2.5C6 3.6 6.9 4.5 8 4.5C9.1 4.5 10 3.6 10 2.5C10 1.4 9.1 0.5 8 0.5Z"
              fill="white"
              fill-opacity="0.87"
            />
          </svg>
        </div>
      ) : (
        <UserInfo by={by} onClick={openModal} isIcon={isIcon} />
      )}
      <Modal
        isOpen={modalIsOpen}
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
