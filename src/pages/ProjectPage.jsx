import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Task from "../components/Task";
import { selectProject } from "../store/project/selectors";
import { fetchProject } from "../store/project/thunks";

const ProjectPage = () => {
  const dispatch = useDispatch();
  const Project = useSelector(selectProject);
  const [todos, setTodos] = useState();
  useEffect(() => {
    dispatch(fetchProject(1));
  }, [dispatch]);

  //   TODO: Filter the tasks by status and map over them accordingly
  return (
    <Container>
      {Project ? (
        <>
          <Header className="Project-Page-Header">
            <h2>{Project.name}</h2>
          </Header>
          <ProjectPageContainer>
            <TodoContainer>
              <h3>Todo</h3>
              <div>
                {Project.tasks.map((task) => {
                  return (
                    <Task
                      key={task.id}
                      title={task.title}
                      description={task.description}
                      status={task.status}
                      createdAt={task.createdAt}
                    />
                  );
                })}
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
        </>
      ) : (
        ""
      )}
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
  overflow-y: auto;
`;

const InProgressContainer = styled.div`
  display: flex;
  background-color: darkgray;
  margin: 0.3rem 1rem;
  padding: 0 1rem;
  width: 20rem;
  flex-direction: column;
  border-radius: 0.2rem;
  overflow-y: auto;
`;

const DoneContainer = styled.div`
  display: flex;
  background-color: darkgray;
  margin: 0.3rem 1rem;
  padding: 0 1rem;
  width: 20rem;
  flex-direction: column;
  border-radius: 0.2rem;
  overflow-y: auto;
`;

const Container = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
`;

export default ProjectPage;
