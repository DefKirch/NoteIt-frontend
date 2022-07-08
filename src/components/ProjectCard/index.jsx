import styled from "styled-components";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";
import "./styles.css";
const ProjectCard = ({ id, name, backgroundColor, color, users }) => {
  return (
    <ProjectCardContainer className="Project-Card-Container">
      <Link className="Project-Link" to={`../project/${id}`}>
        {name}
      </Link>
      <UserIconContainer>
        {users
          ? users.map((user) => {
              return (
                <>
                  <img
                    data-tip
                    data-for={user.name}
                    className="avatar"
                    key={user.id}
                    src={user.profilePicture}
                  />
                  <ReactTooltip id={user.name} place="top" effect="solid">
                    {user.name}
                  </ReactTooltip>
                </>
              );
            })
          : ""}
      </UserIconContainer>
    </ProjectCardContainer>
  );
};

const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 0 0.1rem rgba(0, 0, 0, 0.05);
  background-color: lightgrey;
  border-radius: 0.1rem;
  margin: 2rem;
  padding: 1rem 1rem 1rem;
  width: 20rem;
  height: 10rem;
`;

const UserIconContainer = styled.div`
  display: flex;
  align-items: center;
`;

export default ProjectCard;
