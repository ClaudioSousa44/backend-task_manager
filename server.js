require("dotenv").config();
const express = require("express");
const cors = require("cors");
const taskRoutes = require("./src/routes/taskRoutes");
const swaggerDocs = require("./src/config/swaggerConfig");

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use("/tasks", taskRoutes);

swaggerDocs(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor ativo na porta ${PORT}`));
