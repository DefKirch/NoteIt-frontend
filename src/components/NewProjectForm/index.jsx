import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewProject } from "../../store/project/thunks";

const NewProjectForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [pName, setPName] = useState("");
  const [pDesc, setPDesc] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createNewProject(pName, pDesc, navigate));
  };

  return (
    <Container>
      <NewProjectContainer>
        <form onSubmit={handleSubmit}>
          <div>
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
          </div>
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
      </NewProjectContainer>
    </Container>
  );
};

const NewProjectContainer = styled.div`
  display: flex;
  background-color: #aec4e6;
  width: 25rem;
  height: 15rem;
  padding: 2rem;
  border-radius: 0.2rem;
  box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.2);
  color: white;
  & form {
    width: inherit;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  & label {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
  }
  & input {
    border-radius: 0.1rem;
  }
  & .Submit-Button {
    font-weight: bolder;
    // background: inherit;
    border-radius: 0.2rem;
    padding: 0.5rem;
    width: 6rem;
    border: none;
    align-self: center;
  }
  & .Submit-Button:hover {
    background-color: white;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 92vh;
`;
export default NewProjectForm;
