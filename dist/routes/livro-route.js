"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.livroRouter = void 0;
const express_1 = require("express");
const livro_1 = require("../controller/livro");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
exports.livroRouter = router;
/**
 * @swagger
 * components:
 *     schemas:
 *         Livro:
 *             type: object
 *             required:
 *                 - titulo
 *                 - autor
 *             properties:
 *                 id:
 *                     type: string
 *                     description: id auto-gerado do livro
 *                 titulo:
 *                     type: string
 *                     description: nome do livro
 *                 autor:
 *                     type: array
 *                     items:
 *                         type: string
 *                     description: nome do autor do livro
 *             example:
 *                 id: 1f40d986-380a-41ae-845f-0b63c0c5bb56
 *                 titulo: Programador Pragmático
 *                 autor: ['Andy Hunt','Dave Thomas']
 *     securitySchemes:
 *         bearerAuth:
 *             type: http
 *             scheme: bearer
 *             bearerFormat: JWT
 */
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
router.get("/livro", auth_1.validateAuth, livro_1.findAll);
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
router.get("/livro/:id", livro_1.findLivro);
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
router.post("/livro", livro_1.addLivro);
