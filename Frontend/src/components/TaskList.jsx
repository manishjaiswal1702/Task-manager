import TaskItem from "./TaskItem";

function TaskList({ tasks, onTaskChange }) {
  if (!tasks.length) return <p>No tasks available</p>;

  return (
    <div className="task-list">
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            onTaskChange={onTaskChange}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
