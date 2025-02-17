const prisma = require("../config/database");

const taskModel = {
  async criar(taskData) {
    try {
      return prisma.task.create({
        data: taskData,
      });
    } catch (error) {
      throw new Error("Erro ao criar a tarefa.");
    }
  },

  async buscarTodas() {
    try {
      return prisma.task.findMany();
    } catch (error) {
      throw new Error("Erro ao buscar as tarefas.");
    }
  },

  async buscarPorId(id) {
    try {
      return prisma.task.findUnique({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new Error("Erro ao buscar a tarefa.");
    }
  },

  async atualizar(id, taskData) {
    try {
      return prisma.task.update({
        where: {
          id: id,
        },
        data: taskData,
      });
    } catch (error) {
      throw new Error("Erro ao atualizar a tarefa.");
    }
  },

  async deletar(id) {
    try {
      return prisma.task.delete({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new Error("Erro ao excluir a tarefa.");
    }
  },
};

module.exports = taskModel;
