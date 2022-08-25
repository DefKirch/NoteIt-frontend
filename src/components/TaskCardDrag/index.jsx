import { Fragment, useState, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { InputBase } from "@mui/material";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProject,
  updateTask,
  updateTaskStatus,
  deleteTask,
} from "../../store/project/thunks";
import { selectProjectId } from "../../store/project/selectors";
import DnDWindow from "../DnDWindow";
import ITEM_TYPE from "../../data/types";

const TaskCardDrag = ({ item, index, moveItem, filter }) => {
  const dispatch = useDispatch();
  const [cardTitle, setCardTitle] = useState(item.title);
  const [cardDescription, setCardDescription] = useState(
    item.description ? item.description : ""
  );

  const handleLeft = () => {
    item.status === "Done"
      ? dispatch(updateTaskStatus(item.id, "In Progress"))
      : dispatch(updateTaskStatus(item.id, "Todo"));
  };

  const handleRight = () => {
    item.status === "Todo"
      ? dispatch(updateTaskStatus(item.id, "In Progress"))
      : dispatch(updateTaskStatus(item.id, "Done"));
    filter();
  };

  const handleDelete = () => {
    dispatch(deleteTask(item.id));
  };

  const handleBlur = () => {
    dispatch(updateTask(cardTitle, cardDescription, item.id));
  };

  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: ITEM_TYPE,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoveredRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
      const mousePosition = monitor.getClientOffset();
      const hoverClientY = mousePosition.y - hoveredRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      moveItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
      // dispatch(updateTask(cardTitle, cardDescription, item.id, "Done"));
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "CARD",
    item: { type: ITEM_TYPE, ...item, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [show, setShow] = useState(false);

  const onOpen = () => setShow(true);

  const onClose = () => setShow(false);

  drag(drop(ref));
  return (
    <Fragment>
      <Task
        ref={ref}
        style={{ opacity: isDragging ? 0 : 1 }}
        className={"item"}
        onClick={onOpen}
      >
        <InputBase
          className="Task-Title"
          // multiline
          onBl  ur={handleBlur}
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

        <button className="X-Button" onClick={() => handleDelete()}>
          x
        </button>

        <div className="Arrow-Container">
          <button className="Arrow-Button" onClick={() => handleLeft()}>
            &lt;
          </button>
          <button className="Arrow-Button" onClick={() => handleRight()}>
            &gt;
          </button>
        </div>
      </Task>
      {/* <DnDWindow item={item} onClose={onClose} show={show} /> */}
    </Fragment>
  );
};

const Task = styled.div`
  display: flex;
  flex-direction: column;
  // box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  padding: 0 1rem 1rem 1rem;
  border-radius: 0.2rem;
  margin-bottom: 1rem;
  background-color: white;
  color: white;
  height: 7.5rem;
  max-height: fit-content;
  overflow-y: auto;
  background-color: #9bb1d4;
  position: relative;

  & .Task-Container {
    background-color: blue;
  }

  & .Task-Title {
    font-size: 1.2rem;
    font-weight: 500;
    color: white;
  }
  & .Description-Input {
    overflow-y: hidden;
    opacity: 0.6;
    // color: gray;
  }
  & .Arrow-Container {
    // display: none;
    position: absolute;
    justify-content: flex-end;
    width: 3rem;
    right: 0;
    bottom: 0;
  }
  & .Arrow-Button {
    color: white;
    background-color: inherit;
    border: none;
    bottom: 0;
    right: 0;
    width: 1.5rem;
    position: relative;
    height: 1.5rem;
  }
  & .Arrow-Button:hover {
    cursor: pointer;
    background-color: rgba(137, 196, 244, 0.5);
  }
  & .X-Button {
    color: white;
    position: absolute;
    top: 0;
    right: 0;
    background-color: inherit;
    border: none;
  }
  & .X-Button:hover {
    background-color: rgba(137, 196, 244, 0.5);
    border-radius: 0.2rem;
    cursor: pointer;
  }
`;

export default TaskCardDrag;
