import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyProjects } from "../store/project/thunks";
import { selectMyProjects } from "../store/project/selectors";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { GrAdd } from "react-icons/gr";
import ReactTooltip from "react-tooltip";

const ProjectOverview = () => {
  const dispatch = useDispatch();
  const Me = useSelector(selectMyProjects);
  useEffect(() => {
    dispatch(fetchMyProjects());
  }, [dispatch]);

  return (
    <div>
      <Header className="Project-Page-Header">
        <h2>My Projects ({Me ? Me.projects.length : ""})</h2>
      </Header>
      <NewProjectButton to="/newproject">
        <h3>Create New Project</h3>
      </NewProjectButton>
      <ProjectsContainer>
        {Me
          ? Me.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  name={project.name}
                  description={project.description}
                  backgroundColor={project.backgroundColor}
                  users={project.users}
                />
              );
            })
          : ""}
      </ProjectsContainer>
    </div>
  );
};

const Header = styled.div`
  margin: 0;
  padding: 0.5rem;
  height: 3rem;
  background-color: #aec4e6;
  color: white;
`;

const ProjectsContainer = styled.div`
  //   background-color: lightgray;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 1rem;
`;

const NewProjectButton = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: white;
  background: #9bb1d4;
  border: none;
  font: inherit;
  cursor: pointer;
  width: 10rem;
  padding: 1rem;
  margin: 1rem;
  border-radius: 0.3rem;
  transition: all 1s ease;
  &:hover {
    font-size: 1.3rem;
    width: 14rem;
    box-shadow: 0 0 0 0.2rem rgba(0, 0, 0, 0.05);
    -webkit-transition: all 0.5s ease;
  }
`;
export default ProjectOverview;
