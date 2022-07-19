import "./styles.css";
const TaskColumn = ({ isOver, children }) => {
  const className = isOver ? "highlight-region" : "";

  return <div className={`col${className} overflow`}>{children}</div>;
};

export default TaskColumn;
