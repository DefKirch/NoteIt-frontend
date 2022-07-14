import styled from "styled-components";

const TaskCard = ({ id, title, description, status, createdAt }) => {
  const date = new Date(createdAt).toLocaleDateString();
  return (
    <Task>
      <h4>{title}</h4>
      <PDescription>{description}</PDescription>
    </Task>
  );
};

const Task = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  padding: 0 1rem 1rem 1rem;
  border-radius: 0.5rem;
  background-color: white;
  color: black;
  height: 7.5rem;
  overflow-y: hidden;
  background-color: #ddd;
`;

const PDescription = styled.p`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export default TaskCard;
