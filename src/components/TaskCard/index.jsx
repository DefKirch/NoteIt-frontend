import { InputBase } from "@mui/material";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTask } from "../../store/project/thunks";
import { selectProjectId } from "../../store/project/selectors";

const TaskCard = ({ id, title, description, status, createdAt }) => {
  const date = new Date(createdAt).toLocaleDateString();
  const dispatch = useDispatch();
  const [cardTitle, setCardTitle] = useState(title);
  const [cardDescription, setCardDescription] = useState(description);
  const handleBlur = () => {
    // if (!cardTitle === title) {
    dispatch(updateTask(cardTitle, cardDescription, id));
    // }
  };
  return (
    <Task>
      <InputBase
        className="Task-Title"
        // multiline
        onBlur={handleBlur}
        fullWidth
        value={cardTitle}
        onChange={(e) => setCardTitle(e.target.value)}
      />
      {/* <h4>{title}</h4> */}
      <InputBase
        className="Description-Input"
        multiline
        fullWidth
        value={cardDescription}
        onChange={(e) => setCardDescription(e.target.value)}
        onBlur={handleBlur}
      />
      {/* <PDescription>{description}</PDescription> */}
    </Task>
  );
};

const Task = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  padding: 0 1rem 1rem 1rem;
  border-radius: 0.2rem;
  margin-bottom: 1rem;
  background-color: white;
  color: black;
  height: 7.5rem;
  overflow-y: hidden;
  background-color: #ddd;
  & .Task-Title {
    font-size: 1.2rem;
    font-weight: bold;
  }
  & .Description-Input {
    overflow-y: hidden;
  }
`;

const PDescription = styled.p`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export default TaskCard;
