const taskModel = require("../model/taskModel.js");

const STATUS_VALIDOS = ["pendente", "concluido"];

const taskController = {
  async criarTask(req, res) {
    try {
      validaTask(req.body);

      const task = await taskModel.criar(req.body);

      res.status(201).json({
        status: "success",
        message: "Tarefa criada com sucesso",
        data: task,
      });
    } catch (error) {
      tratarErro(res, error);
    }
  },

  async buscarTodasTasks(req, res) {
    try {
      const tasks = await taskModel.buscarTodas();

      res.status(200).json({
        status: "success",
        message: "Tarefas encontradas com sucesso",
        data: tasks,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: "Erro ao buscar as tasks",
        error: error.message,
      });
    }
  },

  async buscarTaskPorId(req, res) {
    try {
      const taskId = validaId(req.params.id);
      const task = await taskModel.buscarPorId(taskId);

      if (!task) {
        return res.status(404).json({
          status: "error",
          message: "Tarefa não encontrada",
        });
      }

      res.status(200).json({
        status: "success",
        message: "Tarefa encontrada com sucesso",
        data: task,
      });
    } catch (error) {
      tratarErro(res, error);
    }
  },

  async atualizarTask(req, res) {
    try {
      const taskId = validaId(req.params.id);
      validaTask(req.body);

      const taskExiste = await taskModel.buscarPorId(taskId);

      if (!taskExiste) {
        return res.status(404).json({
          status: "error",
          message: "Tarefa não encontrada",
        });
      }

      const task = await taskModel.atualizar(taskId, req.body);

      res.status(200).json({
        status: "success",
        message: "Tarefa atualizada com sucesso",
        data: task,
      });
    } catch (error) {
      tratarErro(res, error);
    }
  },

  async deletarTask(req, res) {
    try {
      const taskId = validaId(req.params.id);
      const task = await taskModel.buscarPorId(taskId);

      if (!task) {
        return res.status(404).json({
          status: "error",
          message: "Tarefa não encontrada",
        });
      }

      await taskModel.deletar(taskId);

      res.status(200).json({
        status: "success",
        message: "Tarefa deletada com sucesso",
      });
    } catch (error) {
      tratarErro(res, error);
    }
  },
};

function validaTask(task) {
  const { titulo, descricao, status } = task;

  if (!titulo || titulo.trim().length === 0) {
    throw { status: 400, message: "Título é obrigatório" };
  }

  if (titulo.length > 70) {
    throw {
      status: 400,
      message: "Título pode possuir no máximo 70 caracteres",
    };
  }

  if (!descricao || descricao.trim().length === 0) {
    throw { status: 400, message: "Descrição é obrigatória" };
  }

  if (!status) {
    throw { status: 400, message: "Status é obrigatório" };
  }

  if (!STATUS_VALIDOS.includes(status)) {
    throw { status: 400, message: "Status inválido" };
  }
}

function validaId(id) {
  if (!id) {
    throw { status: 400, message: "O ID da Tarefa é obrigatório" };
  }

  const taskId = parseInt(id, 10);

  if (isNaN(taskId)) {
    throw { status: 400, message: "O ID da Tarefa deve ser um número válido" };
  }

  return taskId;
}

function tratarErro(res, error) {
  if (error.status) {
    return res.status(error.status).json({
      status: "error",
      message: error.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Erro interno do servidor",
    error: error.message,
  });
}

module.exports = taskController;
