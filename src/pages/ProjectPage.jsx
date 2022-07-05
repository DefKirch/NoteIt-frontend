import styled from "styled-components";

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
              <p>Description</p>
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
  background-color: #221f54;
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
  padding: 1rem;
  flex-direction: column;
  border-radius: 0.2rem;
`;

const InProgressContainer = styled.div`
  display: flex;
  background-color: darkgray;
  margin: 0.3rem 1rem;
  padding: 1rem;
  flex-direction: column;
  border-radius: 0.2rem;
`;

const DoneContainer = styled.div`
  display: flex;
  background-color: darkgray;
  margin: 0.3rem 1rem;
  padding: 1rem;
  flex-direction: column;
  border-radius: 0.2rem;
`;

const Container = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
`;

export default ProjectPage;
