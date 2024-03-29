import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import TaskCardDrag from "../components/TaskCardDrag";
import { selectProject } from "../store/project/selectors";
import { fetchProject, addNewTask } from "../store/project/thunks";
import { IoSettingsOutline } from "react-icons/io5";
import TaskForm from "../components/TaskForm";
import ProjectSettings from "../components/ProjectSettings";
import { statuses } from "../data/statuses";
import DropWrapper from "../components/DropWrapper";
import TaskColumn from "../components/TaskColumn";

const ProjectPage = () => {
  const dispatch = useDispatch();
  const Project = useSelector(selectProject);
  const [tasks, setTasks] = useState(null);
  const { id } = useParams();
  const [todos, setTodos] = useState();
  const [inProgress, setInProgress] = useState();
  const [done, setDone] = useState();
  const [settingsIsOpen, setSettingsIsOpen] = useState(false);
  useEffect(() => {
    if (Project) {
      setTasks(Project.tasks);
    }
  }, []);

  const onDrop = (task, monitor, status) => {
    const mapping = statuses.find((s) => s === status);

    setTasks((prevState) => {
      const newTasks = prevState
        .filter((i) => i.id !== task.id)
        .concat({ ...task, status });
      return [...newTasks];
    });
  };

  const moveTask = (dragIndex, hoverIndex) => {
    const task = tasks[dragIndex];
    setTasks((prevState) => {
      const newTasks = prevState.filter((i, idx) => idx !== dragIndex);
      newTasks.splice(hoverIndex, 0, task);
      return [...newTasks];
    });
  };

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

  const filterTheTasks = () => {
    filterTodos();
    filterInProgress();
    filterDone();
  };

  useEffect(() => {
    if (Project) {
      filterTheTasks();
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
            <p>{Project.description}</p>
            <SettingButton onClick={() => setSettingsIsOpen(!settingsIsOpen)}>
              <IoSettingsOutline />
            </SettingButton>
          </Header>
          <ProjectPageContainer>
            {settingsIsOpen ? (
              <ProjectSettings
                Project={Project}
                setSettingsIsOpen={setSettingsIsOpen}
              />
            ) : (
              ""
            )}
            <TodoContainer className={"col-wrapper"}>
              <div className="sticky">
                <h3 className={"col-header sticky"}>Todo</h3>
              </div>
              <DropWrapper onDrop={onDrop} status={"Todo"}>
                <TaskColumn>
                  {todos
                    ? todos.map((task, tdx) => (
                        <TaskCardDrag
                          key={task.id}
                          item={task}
                          index={tdx}
                          moveItem={moveTask}
                          filter={filterTheTasks}
                        />
                      ))
                    : ""}
                </TaskColumn>
              </DropWrapper>
              <TaskForm status="Todo" />
            </TodoContainer>
            <InProgressContainer className={"col-wrapper"}>
              <div className="sticky">
                <h3 className={"col-header"}>In Progress</h3>
              </div>
              <DropWrapper onDrop={onDrop} status={"In Progress"}>
                <TaskColumn className="Task-Container">
                  {inProgress
                    ? inProgress.map((task, tdx) => (
                        <TaskCardDrag
                          key={tdx}
                          item={task}
                          index={tdx}
                          moveItem={moveTask}
                          filter={filterTheTasks}
                        />
                      ))
                    : ""}
                </TaskColumn>
              </DropWrapper>
              <TaskForm status="In Progress" />
            </InProgressContainer>
            <DoneContainer className={"col-wrapper"}>
              <div className="sticky">
                <h3>Done </h3>
              </div>
              <DropWrapper onDrop={onDrop} status={"Done"}>
                <TaskColumn>
                  {done
                    ? done.map((task, tdx) => (
                        <TaskCardDrag
                          key={tdx}
                          item={task}
                          index={tdx}
                          moveItem={moveTask}
                          filter={filterTheTasks}
                        />
                      ))
                    : ""}
                </TaskColumn>
              </DropWrapper>
              <TaskForm status="Done" />
            </DoneContainer>{" "}
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
  background-color: #aec4e6;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const ProjectPageContainer = styled.div`
  display: flex;
  height: calc(100vh - 8.2rem);
  color: black;
  & html {
    background-color: #cfd7e3;
  }
  & .row {
    display: flex;
  }
  & .col-wrapper {
    display: flex;
    flex-direction: column;
    margin: 0.3rem 1rem 0.3rem 3rem;
    padding: 0 1rem;
    width: 20rem;
    border-radius: 0.2rem;
    overflow-y: auto;
    box-shadow: 0 0 0.3125rem rgba(0, 0, 0, 0.2);
    background-color: #aec4e6;
    &::-webkit-scrollbar {
      display: none;
    }
    & {
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    }
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
  &::-webkit-scrollbar {
    display: none;
  }
  & {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
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
  &::-webkit-scrollbar {
    display: none;
  }
  & {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
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
  &::-webkit-scrollbar {
    display: none;
  }
  & {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;

const Container = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  & .sticky {
    z-index: 1;
    h3 {
      background-color: #aec4e6;
      padding: 1rem;
      position: absolute;
      width: 19rem;
      color: white;
    }
  }
  & .Task-Container {
    margin-top: 5rem;
  }
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

const SettingButton = styled.button`
  display: flex;
  border: none;
  background-color: inherit;
  font-size: 1.5rem;
  color: white;
  border-radius: 0.2rem;
  &:hover {
    cursor: pointer;
    background-color: #9eb6db;
  }
`;
export default ProjectPage;
