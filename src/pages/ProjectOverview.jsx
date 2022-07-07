import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyProjects } from "../store/project/thunks";
import { selectMyProjects } from "../store/project/selectors";
import ProjectCard from "../components/ProjectCard";

const ProjectOverview = () => {
  const dispatch = useDispatch();
  const Me = useSelector(selectMyProjects);
  useEffect(() => {
    dispatch(fetchMyProjects());
  }, [dispatch]);

  return (
    <div>
      <Header className="Project-Page-Header">
        <h2>My Projects</h2>
      </Header>
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
  background-color: #25252e;
  color: white;
`;

const ProjectsContainer = styled.div`
  //   background-color: lightgray;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default ProjectOverview;
