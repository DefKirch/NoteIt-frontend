import styled from "styled-components";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";
import "./styles.css";
const ProjectCard = ({ id, name, backgroundColor, color, users }) => {
  return (
    <ProjectCardContainer>
      <Link to={`../project/${id}`}>
        <h4>{name}</h4>
      </Link>
      <UserIconContainer>
        <p>Members</p>
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
  box-shadow: 0 0 0 0.2rem rgba(0, 0, 0, 0.05);
  border-radius: 0.4rem;
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
