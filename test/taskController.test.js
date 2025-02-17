const taskController = require("../src/controller/taskController");
const taskModel = require("../src/model/taskModel");

jest.mock("../src/model/taskModel");

describe("Task Controller", () => {
  let req, res;

  beforeEach(() => {
    req = { params: {}, body: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  it("Deve criar uma nova task", async () => {
    req.body = {
      titulo: "Nova Task",
      descricao: "Descrição",
      status: "pendente",
    };
    taskModel.criar.mockResolvedValue({ id: 1, ...req.body });

    await taskController.criarTask(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        status: "success",
        message: "Task criada com sucesso",
        data: expect.any(Object),
      })
    );
  });

  it("Deve buscar todas as tasks", async () => {
    const tasks = [
      { id: 1, titulo: "Task 1", status: "pendente" },
      { id: 2, titulo: "Task 2", status: "concluido" },
    ];
    taskModel.buscarTodas.mockResolvedValue(tasks);

    await taskController.buscarTodasTasks(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        status: "success",
        message: "Tasks encontradas com sucesso",
        data: tasks,
      })
    );
  });

  it("Deve buscar uma task por ID", async () => {
    req.params.id = "1";
    taskModel.buscarPorId.mockResolvedValue({ id: 1, titulo: "Task 1" });

    await taskController.buscarTaskPorId(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        status: "success",
        message: "Task encontrada com sucesso",
        data: expect.any(Object),
      })
    );
  });

  it("Deve retornar erro 404 ao buscar uma task inexistente", async () => {
    req.params.id = "1";
    taskModel.buscarPorId.mockResolvedValue(null);

    await taskController.buscarTaskPorId(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({
      status: "error",
      message: "Task não encontrada",
    });
  });

  it("Deve atualizar uma task", async () => {
    req.params.id = "1";
    req.body = {
      titulo: "Task Atualizada",
      descricao: "Nova descrição",
      status: "concluido",
    };
    taskModel.atualizar.mockResolvedValue({ id: 1, ...req.body });

    await taskController.atualizarTask(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        status: "success",
        message: "Task atualizada com sucesso",
        data: expect.any(Object),
      })
    );
  });

  it("Deve deletar uma task existente", async () => {
    req.params.id = "1";
    taskModel.buscarPorId.mockResolvedValue({ id: 1, titulo: "Task 1" });
    taskModel.deletar.mockResolvedValue();

    await taskController.deletarTask(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      status: "success",
      message: "Task deletada com sucesso",
    });
  });

  it("Deve retornar erro 404 ao tentar deletar uma task inexistente", async () => {
    req.params.id = "1";
    taskModel.buscarPorId.mockResolvedValue(null);

    await taskController.deletarTask(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({
      status: "error",
      message: "Task não encontrada",
    });
  });
});
