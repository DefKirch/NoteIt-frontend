import { useDrop } from "react-dnd";
import ITEM_TYPE from "../../data/types";
import React from "react";
import "./styles.css";
import { statuses } from "../../data/statuses";
import TaskForm from "../TaskForm";

const DropWrapper = ({ onDrop, children, status }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ITEM_TYPE,
    // canDrop: (item, monitor) => {
    //   const itemIndex = statuses.findIndex((s) => s === item.status);
    //   const statusIndex = statuses.findIndex((s) => s === status);
    //   return [itemIndex + 1, itemIndex - 1, itemIndex].includes(statusIndex);
    // },
    drop: (item, monitor) => {
      onDrop(item, monitor, status);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <>
      <div ref={drop} className={"drop-wrapper"}>
        {React.cloneElement(children, { isOver })}
      </div>
      <TaskForm status={status} />
    </>
  );
};

export default DropWrapper;
