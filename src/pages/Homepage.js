import { Title } from "../styled";
import { Link } from "react-router-dom";
import { LinkWord } from "../styled";
import styled from "styled-components";

export const Homepage = () => {
  return (
    <Container>
      <div className="Content-Container">
        <h3>NoteIt</h3>
        <p>How to get started:</p>
        <ul>
          <li>
            First <Link to="/login">login</Link> or{" "}
            <Link to="/signup">create an account</Link> if you don't have one
            yet
          </li>
          <li>Create your first project on the my projects page</li>
          <li>
            Create your first tasks with the 'Add task button' at the bottom
          </li>
          <li>Use the arrows to change the status of your task</li>
          <li>New features are added regularly! So keep posted. </li>
        </ul>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: grey;
  height: calc(100vh - 4.25rem);
  font-size: 1.2rem;
  & .Content-Container {
    display: flex;
    flex-direction: column;
    margin: 1rem;
    padding: 1rem 3rem 3rem 3rem;
    background-color: white;
    border-radius: 0.2rem;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
`;
