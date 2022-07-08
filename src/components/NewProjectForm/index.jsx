import { useState } from "react";
import styled from "styled-components";

const NewProjectForm = () => {
  const [pName, setPName] = useState("");
  const [pDesc, setPDesc] = useState("");

  const submitForm = (event) => {
    event.preventDedault();
    console.log("name:", pName);
    console.log("desc:", pDesc);
  };
  return (
    <Container>
      <NewProjectContainer>
        <form onSubmit={submitForm}>
          <label>
            Project Name:
            <input
              type="text"
              id="pname"
              name="pname"
              value={pName}
              onChange={(e) => setPName(e.target.value)}
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              id="pdesc"
              name="pdesc"
              value={pDesc}
              onChange={(e) => setPDesc(e.target.value)}
            />
          </label>
          <button type="submit">Create new project</button>
        </form>
      </NewProjectContainer>
    </Container>
  );
};

const NewProjectContainer = styled.div`
  display: flex;
  background-color: gray;
  width: 25rem;
  height: 30rem;
  padding: 2rem;
  border-radius: 0.2rem;
  box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.2);
  & form {
    width: inherit;
    display: flex;
    flex-direction: column;
  }
  & label {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
  }
  & input {
    border-radius: 0.1rem;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 92vh;
`;
export default NewProjectForm;
