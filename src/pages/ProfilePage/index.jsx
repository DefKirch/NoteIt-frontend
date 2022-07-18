import styled from "styled-components";
const ProfilePage = () => {
  return (
    <ProfilePageContainer>
      <div className="Left">
        <img
          src="https://i0.wp.com/plantbasednews.org/wp-content/uploads/2022/07/plant-based-food-jeremy-clarkson.jpg?resize=730%2C500&ssl=1"
          alt="Profile picture"
        />
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
