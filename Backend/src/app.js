const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("./public"))

app.use("/api/tasks", require("./routes/taskRoutes"));

module.exports = app;
