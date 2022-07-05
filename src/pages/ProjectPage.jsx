import styled from "styled-components";
import Task from "../components/Task";

const ProjectPage = () => {
  return (
    <Container>
      <Header className="Project-Page-Header">
        <h2>My project</h2>
      </Header>
      <ProjectPageContainer>
        <TodoContainer>
          <h3>Todo</h3>
          <div>
            <div>
              <h4>task 1</h4>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available.
              </p>
            </div>
            <div>
              <h4>task 2</h4>
              <p>Description</p>
            </div>
          </div>
        </TodoContainer>
        <InProgressContainer>
          <h3>In Progress</h3>
          <div>
            <div>
              <h4>task 3</h4>
              <p>Description</p>
            </div>
            <div>
              <h4>task 4</h4>
              <p>Description</p>
            </div>
          </div>
        </InProgressContainer>
        <DoneContainer>
          <h3>Done</h3>
          <div>
            <div>
              <h4>task 5</h4>
              <p>Description</p>
            </div>
            <div>
              <h4>task 6</h4>
              <p>Description</p>
            </div>
          </div>
        </DoneContainer>
      </ProjectPageContainer>
    </Container>
  );
};

const Header = styled.div`
  margin: 0;
  padding: 0.5rem;
  height: 3rem;
  background-color: #25252e;
  color: white;
`;

const ProjectPageContainer = styled.div`
  display: flex;
  background-color: lightgray;
  color: white;
  height: calc(100vh - 8rem);
`;

const TodoContainer = styled.div`
  display: flex;
  background-color: darkgray;
  margin: 0.3rem 1rem 0.3rem 3rem;
  padding: 0 1rem;
  width: 20rem;
  flex-direction: column;
  border-radius: 0.2rem;
  overflow-y: scroll;
`;

const InProgressContainer = styled.div`
  display: flex;
  background-color: darkgray;
  margin: 0.3rem 1rem;
  padding: 0 1rem;
  width: 20rem;
  flex-direction: column;
  border-radius: 0.2rem;
  overflow-y: scroll;
`;

const DoneContainer = styled.div`
  display: flex;
  background-color: darkgray;
  margin: 0.3rem 1rem;
  padding: 0 1rem;
  width: 20rem;
  flex-direction: column;
  border-radius: 0.2rem;
  overflow-y: scroll;
`;

const Container = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
`;

export default ProjectPage;
