import { Fragment, useState, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { InputBase } from "@mui/material";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProject,
  updateTask,
  updateTaskStatus,
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
    console.log("LEft right");
  };

  const handleRight = () => {
    item.status === "Todo"
      ? dispatch(updateTaskStatus(item.id, "In Progress"))
      : dispatch(updateTaskStatus(item.id, "Done"));
    filter();
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
    // <Fragment>
    //   <div
    //     ref={ref}
    //     style={{ opacity: isDragging ? 0 : 1 }}
    //     className={"item"}
    //     onClick={onOpen}
    //   >
    //     <div className={"color-bar"}>
    //       <p className={"item-title"}>{item.title}</p>
    //       <p className={"item-description"}>{item.description}</p>
    //     </div>
    //   </div>
    // </Fragment>
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
  color: black;
  height: 7.5rem;
  max-height: fit-content;
  overflow-y: auto;
  background-color: #ddd;
  & .Task-Title {
    font-size: 1.2rem;
    font-weight: bold;
  }
  & .Description-Input {
    overflow-y: hidden;
  }
  & .Arrow-Container {
    // position: relative;
    background-color: blue;
    display: flex;
    justify-content: flex-end;
    width: 4rem;
  }

  & .Arrow-Button {
    // bottom: 0;
    // right: 0;
    width: 2rem;
    // position: absolute;
    height: 1.5rem;
  }
`;

export default TaskCardDrag;
