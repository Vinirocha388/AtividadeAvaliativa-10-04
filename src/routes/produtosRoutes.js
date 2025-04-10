import express from "express";
import produtosController from "../controllers/produtosController.js";

const router = express.Router();

router.get("/", produtosController.getAll);
router.post("/", produtosController.create);
router.get("/:id", produtosController.getById);
router.put("/:id", produtosController.update);
router.delete("/:id", produtosController.delete);

export default router;