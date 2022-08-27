import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import styled from "styled-components";
import { selectMe } from "../../store/project/selectors";
import { fetchMyProjects } from "../../store/project/thunks";
import { useNavigate } from "react-router-dom";
const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const User = useSelector(selectMe);

  useEffect(() => {
    dispatch(fetchMyProjects());
  }, []);

  return (
    <div>
      <ProfilePageContainer>
        {User ? (
          <>
            <div className="Left">
              <div
                className="Profile-Picture"
                style={{
                  backgroundImage: `url(${User.profilePicture})`,
                }}
              ></div>
              {/* <img
                src={User.profilePicture}
                alt="Profile picture"
                className="Profile-Picture"
              /> */}
              <h2>{User.name}</h2>
            </div>
            <div className="Right">
              <div>
                <p>Email: {User.email}</p>
                <p>Phone: {User.phone ? User.phone : ""}</p>
                <p>
                  Account created at:{" "}
                  {new Date(User.createdAt).toLocaleDateString("nl-NL")}
                </p>
              </div>
              <div className="Button-Row">
                <button onClick={() => navigate(-1)} className="Styled-Button">
                  Go back
                </button>
                <button className="Styled-Button">Save Changes</button>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </ProfilePageContainer>
    </div>
  );
};

const ProfilePageContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  & .Left {
    padding: 1rem;
    background-color: #769cd6;
    color: white;
  }
  & .Right {
    background-color: #769cd6;
    width: 40rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    color: white;
  }
  & .Profile-Picture {
    background-position: center;
    background-size: cover;
    max-height: 20rem;
    height: 20rem;
    max-width 20rem;
    width: 20rem;
    border-radius: 0.2rem;
  }
  & .Profile-Picture::after {
    display: block;
    content: url("public/edit-icon.png");
    height: 10px;
    width: 10px;
  }
  & .Button-Row {
    display: flex;
    justify-content: space-between;
  }

  & .Styled-Button {
    background-color: #8ca7d1;
    border: none;
    color: white;
    font-size: 1.2rem;
    -webkit-transition: all 0.25s ease;
  }
  & .Styled-Button:hover {
    color: white;
    cursor: pointer;
    background-color: lightgray;
    border-radius: 0.2rem;
  }
`;

export default ProfilePage;
