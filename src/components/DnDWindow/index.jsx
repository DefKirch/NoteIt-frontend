import Modal from "react-modal";

Modal.setAppElement("body");

const DnDWindow = ({ show, onClose, item }) => {
  return (
    <Modal
      isOpen={show}
      onRequestClose={onClose}
      ariaHideApp={false}
      className={"modal"}
      overlayClassName={"overlay"}
    >
      <div className={"close-btn-ctn"}>
        <h1 style={{ flex: "1 90%" }}>{item.title}</h1>
        <button className={"close-btn"} onClick={onClose}>
          X
        </button>
      </div>
      <div>
        <h2>Description</h2>
        <p>{item.description}</p>
        <h2>Status</h2>
        <p>item icon</p>
      </div>
    </Modal>
  );
};

export default DnDWindow;
