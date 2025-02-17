/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Cria uma nova tarefa
 *     tags: 
 *       - Tasks
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - titulo
 *               - descricao
 *               - status
 *             properties:
 *               titulo:
 *                 type: string
 *                 example: "Fazer compras"
 *                 maxLength: 70
 *               descricao:
 *                 type: string
 *                 example: "Comprar leite, ovos e pão"
 *               status:
 *                 type: string
 *                 example: "pendente"
 *     responses:
 *       201:
 *         description: Tarefa criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "success"
 *                 message:
 *                   type: string
 *                   example: "Task criada com sucesso"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     titulo:
 *                       type: string
 *                       example: "Fazer compras"
 *                     descricao:
 *                       type: string
 *                       example: "Comprar leite, ovos e pão"
 *                     status:
 *                       type: string
 *                       example: "pendente"
 *                     criado_em:
 *                       type: string
 *                       format: date-time
 *                       example: "2025-02-15T12:00:00Z"
 *                     atualizado_em:
 *                       type: string
 *                       format: date-time
 *                       example: "2025-02-15T12:30:00Z"
 *       400:
 *         description: Requisição inválida (erros de validação)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   type: string
 *                   example: "Título é obrigatório"
 *       500:
 *         description: Erro interno ao criar a tarefa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   type: string
 *                   example: "Erro ao criar a task"
 *                 error:
 *                   type: string
 *                   example: "Detalhes do erro"
 */

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Retorna todas as tarefas
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: Lista de tarefas retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   titulo:
 *                     type: string
 *                     example: "Fazer compras"
 *                   descricao:
 *                     type: string
 *                     example: "Comprar leite, ovos e pão"
 *                   status:
 *                     type: string
 *                     example: "pendente"
 *                   criado_em:
 *                     type: string
 *                     format: date-time
 *                     example: "2025-02-15T12:00:00Z"
 *                   atualizado_em:
 *                     type: string
 *                     format: date-time
 *                     example: "2025-02-15T12:30:00Z"
 */

/**
 * @swagger
 * /tasks/{id}:
 *   get:
 *     summary: Retorna uma tarefa pelo ID
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da tarefa a ser retornada
 *     responses:
 *       200:
 *         description: Tarefa encontrada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "success"
 *                 message:
 *                   type: string
 *                   example: "Task encontrada com sucesso"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     titulo:
 *                       type: string
 *                       example: "Fazer compras"
 *                     descricao:
 *                       type: string
 *                       example: "Comprar leite, ovos e pão"
 *                     status:
 *                       type: string
 *                       example: "pendente"
 *                     criado_em:
 *                       type: string
 *                       format: date-time
 *                       example: "2025-02-15T12:00:00Z"
 *                     atualizado_em:
 *                       type: string
 *                       format: date-time
 *                       example: "2025-02-15T12:30:00Z"
 *       404:
 *         description: Tarefa não encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   type: string
 *                   example: "Task não encontrada"
 *       500:
 *         description: Erro ao buscar a tarefa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   type: string
 *                   example: "Error ao encontrar task"
 *                 error:
 *                   type: string
 *                   example: "Detalhes do erro"
 */

/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Atualiza uma tarefa pelo ID
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da tarefa a ser atualizada
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - titulo
 *               - descricao
 *               - status
 *             properties:
 *               titulo:
 *                 type: string
 *                 example: "Fazer compras"
 *                 maxLength: 70
 *               descricao:
 *                 type: string
 *                 example: "Comprar leite, ovos e pão"
 *               status:
 *                 type: string
 *                 example: "pendente"
 *     responses:
 *       200:
 *         description: Tarefa atualizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "success"
 *                 message:
 *                   type: string
 *                   example: "Task atualizada com sucesso"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     titulo:
 *                       type: string
 *                       example: "Fazer compras"
 *                     descricao:
 *                       type: string
 *                       example: "Comprar leite, ovos e pão"
 *                     status:
 *                       type: string
 *                       example: "pendente"
 *                     criado_em:
 *                       type: string
 *                       format: date-time
 *                       example: "2025-02-15T12:00:00Z"
 *                     atualizado_em:
 *                       type: string
 *                       format: date-time
 *                       example: "2025-02-15T12:30:00Z"
 *       400:
 *         description: Requisição inválida (erros de validação)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   type: string
 *                   example: "Título é obrigatório"
 *       404:
 *         description: Tarefa não encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   type: string
 *                   example: "Task não encontrada"
 *       500:
 *         description: Erro interno ao atualizar a tarefa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   type: string
 *                   example: "Error ao atualizar task"
 *                 error:
 *                   type: string
 *                   example: "Detalhes do erro"
 */

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Deleta uma tarefa pelo ID
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da tarefa a ser deletada
 *     responses:
 *       200:
 *         description: Tarefa deletada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "success"
 *                 message:
 *                   type: string
 *                   example: "Task deletada com sucesso"
 *       400:
 *         description: ID da tarefa é obrigatório
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   type: string
 *                   example: "O id da task é obrigatório"
 *       404:
 *         description: Tarefa não encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   type: string
 *                   example: "Task não encontrada"
 *       500:
 *         description: Erro ao deletar a tarefa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   type: string
 *                   example: "Error ao deletar task"
 *                 error:
 *                   type: string
 *                   example: "Detalhes do erro"
 */