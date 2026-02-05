import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { getTasks } from "./services/taskService";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <TaskForm onTaskAdded={loadTasks} />
      <TaskList tasks={tasks} onTaskChange={loadTasks} />
    </div>
  );
}

export default App;
