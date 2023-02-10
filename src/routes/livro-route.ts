import {Router} from "express";
import {addLivro, findAll, findLivro} from "../controller/livro";
import {validateAuth} from "../middleware/auth";

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Livros
 *     description: API de gerenciamente de Livros
 */

/**
 * @swagger
 * /livro:
 *      get:
 *          summary: Retorna todos os livros da lista
 *          tags: [Livros]
 *          security: [{"bearerAuth": []}]
 *          description: Retorna um json com a lista de todos os livros.
 *          responses:
 *              200:
 *                  description: Success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: "#/components/schemas/Livro"
 *              401:
 *                  description: Unauthorized
 *              404:
 *                  description: Not found
 *              500:
 *                  description: Internal server error
 */
router.get("/livro", validateAuth, findAll)

/**
 * @swagger
 * /livro/{id}:
 *      get:
 *          summary: Pega o livro pelo id
 *          tags: [Livros]
 *          parameters:
 *              - in: path
 *                name: id
 *                schema:
 *                    type: string
 *                required: true
 *                description: Retorna um livro em formato json do ID especificado na requisição.
 *          responses:
 *              200:
 *                  description: Descrição do Livro com id
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: "#/components/schemas/Livro"
 *              404:
 *                  description: Not found
 *              500:
 *                  description: Internal server error
 */
router.get("/livro/:id", findLivro)

/**
 * @swagger
 * /livro:
 *     post:
 *         summary: Adiciona livro na lista
 *         tags: [Livros]
 *         requestBody:
 *             required: true
 *             content:
 *                 application/json:
 *                     schema:
 *                         type: object
 *                         properties:
 *                             titulo:
 *                                 type: string
 *                                 description: nome do livro
 *                             autor:
 *                                 type: array
 *                                 items:
 *                                     type: string
 *                                 description: nome do autor do livro
 *         responses:
 *             201:
 *                 description: Livro Criado com sucesso
 */
router.post("/livro", addLivro)

export {router as livroRouter}
