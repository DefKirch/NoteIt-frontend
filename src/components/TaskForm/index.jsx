import styled from "styled-components";
import { Collapse, Fade } from "@mui/material";
import InputCard from "../InputCard";
import { useState } from "react";

// const useStyle = makeStyles((theme) => ({
//   addTask: {
//     padding: theme.spacing(1, 1, 1, 2),
//   },
// }));

const TaskForm = ({ status }) => {
  const [open, setOpen] = useState(false);
  return (
    <TForm>
      <Collapse in={open}>
        <InputCard setOpen={setOpen} status={status} />
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
  //   border-radius: 0.5rem;
  background-color: #ebecf0;
  position: absolute;
  bottom: 0;
  margin-bottom: 0.3rem;
  & .Input-Card-Row {
    display: flex;
    align-items: center;
    width: 21rem;
    border-radius: 0.2rem;
  }
  & .Input-Card-Row:hover {
    // background-color: rgba(0, 0, 0, 0.25);
    // box-shadow: 0 0 0 0.2rem rgba(0, 0, 0, 0.25);
    transition: 750ms;
    color: white;
    cursor: pointer;
    font-size: 1.4rem;
  }
`;
export default TaskForm;
