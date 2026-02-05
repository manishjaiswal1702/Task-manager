import { useState } from "react";
import { createTask } from "../services/taskService";

function TaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask({ title, description, status });
    setTitle("");
    setDescription("");
    setStatus("Pending");
    onTaskAdded();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
      <button>Add Task</button>
    </form>
  );
}

export default TaskForm;
