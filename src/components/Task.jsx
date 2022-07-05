const Task = ({ id, title, description, status, createdAt }) => {
  return (
    <div>
      <h4>{title}</h4>
      <p>{description}</p>
      <p>{status}</p>
      <p>{createdAt}</p>
    </div>
  );
};

export default Task;
