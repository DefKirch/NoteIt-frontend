import styled from "styled-components";
import { IoCloseOutline, IoRemoveCircleOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { selectAllUsersWithId, selectMe } from "../../store/project/selectors";
import { useState, useEffect } from "react";
import {
  fetchAllUsersEmailsAndId,
  addNewUserToProject,
} from "../../store/project/thunks";

const ProjectSettings = ({ Project, setSettingsIsOpen }) => {
  const User = useSelector(selectMe);
  const allUsersWithId = useSelector(selectAllUsersWithId);
  const dispatch = useDispatch();
  const [newUserInputId, setNewUserInputId] = useState();
  const [showAddNewUser, setShowAddNewUser] = useState(false);

  const toggleNewUser = () => {
    setShowAddNewUser(!showAddNewUser);
  };

  const handleAddUser = () => {
    console.log("newUserID: ", newUserInputId);
    console.log("ProjectID: ", Project.id);
    dispatch(addNewUserToProject(Project.id, newUserInputId));
  };

  useEffect(() => {
    dispatch(fetchAllUsersEmailsAndId());
  }, []);
  return (
    <Container>
      <h3>{Project.name}</h3>
      <button className="X-Button" onClick={() => setSettingsIsOpen(false)}>
        <IoCloseOutline />
      </button>
      <p>
        {Project.description
          ? Project.description
          : "Project description empty"}
      </p>
      <p>
        <bold>More settings coming !</bold>
      </p>
      <div className="Users-Div">
        <p>Collaborators:</p>

        {Project.users.map((user) => {
          return (
            <div className="User-Row">
              <p style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={user.profilePicture}
                  className="avatar"
                  style={{ marginRight: "0.5rem" }}
                />
                <li key={user.id}>
                  {user.name} - {user.email}
                </li>
              </p>
              {user.name !== User.name ? (
                <button className="Remove-Button">
                  <IoRemoveCircleOutline />
                </button>
              ) : (
                ""
              )}
            </div>
          );
        })}
        <button className="Add-User-Button" onClick={() => toggleNewUser()}>
          {showAddNewUser ? "X" : "Add new user"}
        </button>
        {showAddNewUser ? (
          <div className="New-User-Window">
            {/* <p>Email-address</p> */}
            <div>
              <select onChange={(e) => setNewUserInputId(e.target.value)}>
                <option>Select a new User</option>
                {allUsersWithId
                  ? allUsersWithId.map((_user) => {
                      if (_user.email !== User.email) {
                        return <option value={_user.id}>{_user.email}</option>;
                      } else {
                        return 0;
                      }
                    })
                  : ""}
              </select>
              <button
                className="Add-User-Button"
                onClick={() => handleAddUser()}
              >
                Add
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <button className="Close-Button" onClick={() => setSettingsIsOpen(false)}>
        Close
      </button>
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
  & .Add-User-Button {
    background-color: inherit;
    border: none;
    font-size: 1.2rem;
    -webkit-transition: all 0.25s ease;
    border-radius: 0.2rem;
    background-color: lightgrey;
    color: grey;
    margin-bottom: 1rem;
  }
  & .Add-User-Button:hover {
    cursor: pointer;
    color: white;
    background-color: grey;
  }
  & .New-User-Window {
    margin-top: 0;
    padding-top: 0;
    padding-bottom: 1rem;
  }
`;

export default ProjectSettings;
