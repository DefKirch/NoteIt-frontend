import { InputBase } from "@mui/material";
import { Paper } from "@mui/material";
import styled from "styled-components";
import { MdClear } from "react-icons/md";

const InputCard = ({ setOpen }) => {
  return (
    <InputCardContainer>
      <div>
        <Paper className="Card">
          <InputBase
            multiline
            fullWidth
            placeholder="task name"
            className="InputBase-Selector"
          />
        </Paper>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Button className="Confirm-Button" onClick={() => setOpen(false)}>
          Add
        </Button>
        <MdClear className="Clear-Button" onClick={() => setOpen(false)} />
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
    background-color: green;
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
