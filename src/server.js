import express from "express";
import produtosRoutes from "./routes/produtosRoutes.js";
const app = express();
const port = 3000;
app.use(express.json());
app.use("/produtos", produtosRoutes);
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});