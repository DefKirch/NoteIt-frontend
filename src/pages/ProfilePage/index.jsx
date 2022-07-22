import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import styled from "styled-components";
import { selectMe } from "../../store/project/selectors";
import { fetchMyProjects } from "../../store/project/thunks";
const ProfilePage = () => {
  const dispatch = useDispatch();
  const User = useSelector(selectMe);

  useEffect(() => {
    dispatch(fetchMyProjects());
  }, []);

  return (
    <ProfilePageContainer>
      <div className="Left">
        <img src="" alt="Profile picture" />
        <h2>My name</h2>
      </div>
      <div className="Right">
        <p>Email</p>
        <p>Password</p>
        <p>Password</p>
      </div>
    </ProfilePageContainer>
  );
};

const ProfilePageContainer = styled.div`
  display: flex;
  & .Left {
    background-color: lightgray;
  }
  & .Right {
  }
`;

export default ProfilePage;
