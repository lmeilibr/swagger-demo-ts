"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.livroRouter = void 0;
const express_1 = require("express");
const livro_1 = require("../controller/livro");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
exports.livroRouter = router;
router.get("/livro", auth_1.validateAuth, livro_1.findAll);
router.get("/livro/:id", livro_1.findLivro);
router.post("/livro", livro_1.addLivro);
