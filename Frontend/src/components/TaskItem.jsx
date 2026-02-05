import { useState } from "react";
import { deleteTask, updateTask } from "../services/taskService";

function TaskItem({ task, onTaskChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [status, setStatus] = useState(task.status);

  const handleUpdate = async () => {
    await updateTask(task._id, { title, status });
    setIsEditing(false);
    onTaskChange();
  };

  const handleDelete = async () => {
    await deleteTask(task._id);
    onTaskChange();
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>

          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <div>
            <strong>{task.title}</strong>
            <p className="task-desc">{task.description}</p>
            <small>{task.status}</small>
          </div>

          <div>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </>
      )}
    </li>
  );
}

export default TaskItem;
