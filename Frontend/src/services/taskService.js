const API_URL = "http://localhost:3000/api/tasks";

export const getTasks = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const createTask = async (task) => {
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task)
  });
};

export const deleteTask = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};

export const updateTask = async (id, updatedTask) => {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedTask)
  });
};
