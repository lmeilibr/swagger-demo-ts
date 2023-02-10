import {Router} from "express";
import {addLivro, findAll, findLivro} from "../controller/livro";
import {validateAuth} from "../middleware/auth";

const router = Router();


router.get("/livro", validateAuth, findAll)

router.get("/livro/:id", findLivro)

router.post("/livro", addLivro)

export {router as livroRouter}
