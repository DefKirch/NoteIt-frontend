import styled from "styled-components";
import { IoCloseOutline, IoRemoveCircleOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { selectMe } from "../../store/project/selectors";
const ProjectSettings = ({ Project, setSettingsIsOpen }) => {
  const User = useSelector(selectMe);
  return (
    <Container>
      <h3>{Project.name}</h3>
      <button className="X-Button" onClick={() => setSettingsIsOpen(false)}>
        <IoCloseOutline />
      </button>
      <p>{Project.description}</p>
      <p>More settings coming</p>
      <div className="Users-Div">
        <p>Collaborators:</p>

        {Project.users.map((user) => {
          return (
            <p className="User-Row">
              <li style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={user.profilePicture}
                  className="avatar"
                  style={{ marginRight: "0.5rem" }}
                />
                <li key={user.id}>
                  {user.name} - {user.email}
                </li>
              </li>
              {user.name !== User.name ? (
                <button className="Remove-Button">
                  <IoRemoveCircleOutline />
                </button>
              ) : (
                ""
              )}
            </p>
          );
        })}
        <p>Add user</p>
        <button
          className="Close-Button"
          onClick={() => setSettingsIsOpen(false)}
        >
          Close
        </button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 2rem 2rem 2rem;
  position: absolute;
  top: 25%;
  right: 35%;
  //   -webkit-transform: translate(-35%, -50%);
  //   transform: translate(-35%, -50%);
  background-color: white;
  box-shadow: 0 0 0 0.1rem rgba(0, 0, 0, 0.1);
  border-radius: 0.2rem;
  width: 30rem;
  height: auto;
  z-index: 100;
  & .Users-Div {
    // background-color: grey;
  }

  & .Users-Div li {
    list-style-type: none;
  }
  & .Top-Row {
  }
  & .X-Button {
    position: absolute;
    top: 0;
    right: 0;
    background-color: inherit;
    border: none;
    font-size: 1.2rem;
    -webkit-transition: all 0.25s ease;
  }
  & .X-Button:hover {
    color: white;
    cursor: pointer;
    background-color: lightgray;
    border-radius: 0.2rem;
  }
  & .User-Row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & .Remove-Button {
    background-color: inherit;
    border: none;
    font-size: 1.2rem;
    -webkit-transition: all 0.25s ease;
  }
  & .Remove-Button:hover {
    cursor: pointer;
  }
  & .Close-Button {
    background-color: inherit;
    border: none;
    font-size: 1.2rem;
    -webkit-transition: all 0.25s ease;
    border-radius: 0.2rem;
    background-color: lightgrey;
    color: grey;
  }
  & .Close-Button:hover {
    cursor: pointer;
    color: white;
    background-color: grey;
  }
`;

export default ProjectSettings;
