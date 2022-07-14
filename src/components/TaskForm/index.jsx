import styled from "styled-components";
import { Collapse, Fade } from "@mui/material";
import InputCard from "../InputCard";
import { useState } from "react";

// const useStyle = makeStyles((theme) => ({
//   addTask: {
//     padding: theme.spacing(1, 1, 1, 2),
//   },
// }));

const TaskForm = () => {
  const [open, setOpen] = useState(false);
  return (
    <TForm>
      <Collapse in={open}>
        <InputCard setOpen={setOpen} />
      </Collapse>
      <Collapse in={!open}>
        <div className="Input-Card-Row" onClick={() => setOpen(!open)}>
          <p style={{ marginLeft: "0.3rem" }}>+ Add a task</p>
        </div>
      </Collapse>
    </TForm>
  );
};

const TForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0.5rem;
  margin-top: 1rem;
  background-color: #ebecf0;
  & .Input-Card-Row {
    display: flex;
    align-items: center;
    width: 20rem;
    border-radius: 0.2rem;
  }
  & .Input-Card-Row:hover {
    background-color: rgba(0, 0, 0, 0.25);
    transition: 500ms;
    color: white;
    // cursor: pointer;
  }
`;
export default TaskForm;
