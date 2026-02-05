const Task = require("../models/Task");

exports.getTasks = async (req, res) => {
  const tasks = await Task.find().sort({ createdAt: -1 });
  res.json(tasks);
};

exports.createTask = async (req, res) => {
  const task = new Task(req.body);
  const savedTask = await task.save();
  res.status(201).json(savedTask);
};

exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
};

exports.updateTask = async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedTask);
};
