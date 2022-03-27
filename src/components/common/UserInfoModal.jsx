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

const UserInfoModal = ({ by, isIcon, isOwnUser = false, from }) => {
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
          {from === "home" ? (
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.4381 10.1281C12.279 10.1281 13.7714 8.63571 13.7714 6.79476C13.7714 4.95381 12.279 3.46143 10.4381 3.46143C8.59712 3.46143 7.10474 4.95381 7.10474 6.79476C7.10474 8.63571 8.59712 10.1281 10.4381 10.1281Z"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.77124 18.4614V15.1281C3.77124 14.2076 4.51743 13.4614 5.43791 13.4614H15.4379C16.3584 13.4614 17.1046 14.2076 17.1046 15.1281V18.4614"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          ) : (
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
          )}
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
