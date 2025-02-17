const express = require("express");
const TaskController = require("../controller/taskController");

const router = express.Router();

router.post("/", TaskController.criarTask);
router.get("/", TaskController.buscarTodasTasks);
router.get("/:id", TaskController.buscarTaskPorId);
router.put("/:id", TaskController.atualizarTask);
router.delete("/:id", TaskController.deletarTask);

module.exports = router;
