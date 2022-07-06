import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import TaskCard from "../components/TaskCard";
import { selectProject } from "../store/project/selectors";
import { fetchProject } from "../store/project/thunks";

const ProjectPage = () => {
  const dispatch = useDispatch();
  const Project = useSelector(selectProject);
  const { id } = useParams();
  const [todos, setTodos] = useState();
  const [inProgress, setInProgress] = useState();
  const [done, setDone] = useState();

  const filterTodos = () => {
    setTodos(
      Project.tasks.filter((task) => {
        return task.status === "Todo";
      })
    );
    console.log(todos);
  };

  const filterInProgress = () => {
    setInProgress(
      Project.tasks.filter((task) => {
        return task.status === "In Progress";
      })
    );
    console.log(todos);
  };

  const filterDone = () => {
    setDone(
      Project.tasks.filter((task) => {
        return task.status === "Done";
      })
    );
    console.log(todos);
  };

  useEffect(() => {
    if (Project) {
      filterTodos();
      filterInProgress();
      filterDone();
    }
  }, [Project]);

  useEffect(() => {
    dispatch(fetchProject(id));
  }, [dispatch]);

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
                {todos
                  ? todos.map((task) => {
                      return (
                        <TaskCard
                          key={task.id}
                          title={task.title}
                          description={task.description}
                          status={task.status}
                          createdAt={task.createdAt}
                        />
                      );
                    })
                  : ""}
              </div>
            </TodoContainer>
            <InProgressContainer>
              <h3>In Progress</h3>
              <div>
                {inProgress
                  ? inProgress.map((task) => {
                      return (
                        <TaskCard
                          key={task.id}
                          title={task.title}
                          description={task.description}
                          status={task.status}
                          createdAt={task.createdAt}
                        />
                      );
                    })
                  : ""}
              </div>
            </InProgressContainer>
            <DoneContainer>
              <h3>Done</h3>
              <div>
                {done
                  ? done.map((task) => {
                      return (
                        <TaskCard
                          key={task.id}
                          title={task.title}
                          description={task.description}
                          status={task.status}
                          createdAt={task.createdAt}
                        />
                      );
                    })
                  : ""}
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
