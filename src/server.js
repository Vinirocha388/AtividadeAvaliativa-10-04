import express from "express";
import notaRoutes from "./routes/notaRoutes.js";
const app = express();
const port = 3000;
app.use(express.json());
app.use("/notas", notaRoutes);
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});