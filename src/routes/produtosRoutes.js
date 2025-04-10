import express from "express";
import produtoController from "../controllers/produtoController.js";

const router = express.Router();

router.get("/", produtoController.getAll);
router.post("/", produtoController.create);
router.get("/:id", produtoController.getById);
router.put("/:id", produtoController.update);
router.delete("/:id", produtoController.delete);

export default router;