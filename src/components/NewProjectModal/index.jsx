import Modal from "react-modal";
import { ReactDOM } from "react";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createNewProject } from "../../store/project/thunks";
Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zindex: 1,
  },
};

const NewProjectModal = ({ isOpen, onClose, item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [pName, setPName] = useState("");
  const [pDesc, setPDesc] = useState("");
  let subtitle;

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createNewProject(pName, pDesc, navigate));
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
      style={customStyles}
      className={"modal"}
      overlayClassName={"overlay"}
    >
      <div className={"close-btn-ctn"}>
        <h1
          ref={(_subtitle) => (subtitle = _subtitle)}
          style={{ flex: "1 90%" }}
        >
          Create new project
        </h1>
        <button className={"close-btn"} onClick={onClose}>
          X
        </button>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Project Name
            <input
              type="text"
              value={pName}
              onChange={(e) => setPName(e.target.value)}
            />
          </label>
          <label>
            Description
            <input
              type="text"
              value={pDesc}
              onChange={(e) => setPDesc(e.target.value)}
            />
          </label>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <button
              className="Submit-Button"
              style={{ marginRight: "1rem" }}
              onClick={() => navigate(-1)}
            >
              Back
            </button>
            <input className="Submit-Button" type="submit" />
          </div>
        </form>
      </div>
    </Modal>
  );
};

// const ModalContainer = styled.div`
//   & .modal {
//     background-color: blue;
//     display: flex;
//     background-color: #aec4e6;
//     width: 25rem;
//     height: 15rem;
//     padding: 2rem;
//     border-radius: 0.2rem;
//     box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.2);
//     color: white;
//   }
//   & form {
//     width: inherit;
//     display: flex;
//     flex-direction: column;
//   }
//   & label {
//     display: flex;
//     justify-content: space-between;
//     margin: 1rem 0;
//   }
//   & input {
//     border-radius: 0.1rem;
//   }
//   & .Submit-Button {
//     font-weight: bolder;
//     // background: inherit;
//     border-radius: 0.2rem;
//     padding: 0.5rem;
//     width: 6rem;
//     border: none;
//     align-self: center;
//   }
//   & .Submit-Button:hover {
//     background-color: white;
//   }
// `;

export default NewProjectModal;
