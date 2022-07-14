import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import TaskCard from "../components/TaskCard";
import { selectProject } from "../store/project/selectors";
import { fetchProject, addNewTask } from "../store/project/thunks";
import { GrAdd } from "react-icons/gr";
import TaskForm from "../components/TaskForm";

const ProjectPage = () => {
  const dispatch = useDispatch();
  const Project = useSelector(selectProject);
  const { id } = useParams();
  const [todos, setTodos] = useState();
  const [inProgress, setInProgress] = useState();
  const [done, setDone] = useState();

  const filterTodos = () => {
    setTodos(Project.tasks.filter((task) => task.status === "Todo"));
  };

  const filterInProgress = () => {
    setInProgress(
      Project.tasks.filter((task) => task.status === "In Progress")
    );
  };

  const filterDone = () => {
    setDone(Project.tasks.filter((task) => task.status === "Done"));
  };

  useEffect(() => {
    if (Project) {
      filterTodos();
      filterInProgress();
      filterDone();
    }
  }, [Project]);

  const handleAdd = (status) => {
    dispatch(addNewTask(status));
  };

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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h3>Todo </h3>
                {/* <AddButton onClick={() => handleAdd("Todo")}>
                  <GrAdd className="GrAdd" />
                </AddButton> */}
              </div>

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
              <TaskForm status="Todo" />
            </TodoContainer>
            <InProgressContainer>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h3>In Progress </h3>
                {/* <AddButton onClick={() => handleAdd("In Progress")}>
                  <GrAdd className="GrAdd" />
                </AddButton> */}
              </div>
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
              <TaskForm status="In Progress" />
            </InProgressContainer>
            <DoneContainer>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h3>Done </h3>
                {/* <AddButton onClick={() => handleAdd("Done")}>
                  <GrAdd className="GrAdd" />
                </AddButton> */}
              </div>
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
              <TaskForm status="Done" />
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
  color: white;
  height: calc(100vh - 8.2rem);
  color: black;
`;

const TodoContainer = styled.div`
  display: flex;
  margin: 0.3rem 1rem 0.3rem 3rem;
  padding: 0 1rem;
  width: 20rem;
  flex-direction: column;
  border-radius: 0.2rem;
  overflow-y: auto;
  box-shadow: 0 0 0.3125rem rgba(0, 0, 0, 0.2);
  background-color: #ebecf0;
`;

const InProgressContainer = styled.div`
  display: flex;
  margin: 0.3rem 1rem;
  padding: 0 1rem;
  width: 20rem;
  flex-direction: column;
  border-radius: 0.2rem;
  overflow-y: auto;
  box-shadow: 0 0 0.3125rem rgba(0, 0, 0, 0.2);
  background-color: #ebecf0;
`;

const DoneContainer = styled.div`
  display: flex;
  margin: 0.3rem 1rem;
  padding: 0 1rem;
  width: 20rem;
  flex-direction: column;
  border-radius: 0.2rem;
  overflow-y: auto;
  box-shadow: 0 0 0.3125rem rgba(0, 0, 0, 0.2);
  background-color: #ebecf0;
`;

const Container = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
`;

const AddButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  width: 1.2rem;
  height: 1.2rem;
  &:hover {
    .GrAdd {
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 1rem;
    }
  }
`;

export default ProjectPage;
