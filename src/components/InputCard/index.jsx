import { InputBase } from "@mui/material";
import { Paper } from "@mui/material";
import styled from "styled-components";
import { MdClear } from "react-icons/md";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTask } from "../../store/project/thunks";
import { selectProjectId } from "../../store/project/selectors";

const InputCard = ({ setOpen, status }) => {
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState("");
  const pId = useSelector(selectProjectId);

  const handleNewTask = () => {
    if (status && taskName && pId) {
      dispatch(addNewTask(status, taskName, pId));
      setOpen(false);
      setTaskName("");
    }
  };

  const handleClose = () => {
    setTaskName("");
    setOpen(false);
  };
  return (
    <InputCardContainer>
      <div>
        <Paper className="Card">
          <InputBase
            multiline
            fullWidth
            placeholder="task name"
            className="InputBase-Selector"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            // onBlur={() => setOpen(false)}
          />
        </Paper>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Button className="Confirm-Button" onClick={() => handleNewTask()}>
          Add
        </Button>
        <MdClear className="Clear-Button" onClick={handleClose} />
      </div>
    </InputCardContainer>
  );
};

const InputCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  & .Card {
    padding: 1rem;
  }
  & .Clear-Button {
    font-size: 24px;
    border-radius: 0.2rem;
  }
  & .Clear-Button:hover {
    background-color: rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
  & .Confirm-Button {
    background-color: #1cc98a;
    padding: 0.5rem;
    border-radius: 0.2rem;
    margin: 0.5rem 0.5rem 0.5rem 0;
    color: white;
    font-weight: bolder;
  }

  & .Confirm-Button:hover {
    opacity: 0.5;
    cursor: pointer;
  }
  & .InputBase-Selector {
    width: 18rem;
  }
`;

const Button = styled.button`
  background: inherit;
  border: none;
  font-size: inherit;
`;

export default InputCard;
