import notaModel from "../models/notaModel.js";

class NotaController {
  getAll = async (req, res) => {
    try {
      const notas = await notaModel.getAll();
      res.json(notas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar notas" });
    }
  };

  create = async (req, res) => {
    const { titulo, conteudo, cor } = req.body;
    
    
    try {
      if (!titulo || !conteudo) {
        return res.status(400).json({ erro: "Título e conteúdo são obrigatórios" });
      }
      const novaNota = await notaModel.create(titulo, conteudo, cor);
      res.status(201).json(novaNota);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao criar nota" });
    }
  };

  getById = async (req, res) => {
    const { id } = req.params;
    try {
      const nota = await notaModel.getById(Number(id));
      if (!nota) return res.status(404).json({ erro: "Nota não encontrada" });
      res.json(nota);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar nota" });
    }
  };

  searchByTerm = async (req, res) => {
    const { term } = req.query;
    try {
      const notas = await notaModel.searchByTerm(term);
      res.json(notas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar notas" });
    }
  };

  

  update = async (req, res) => {
    const { id } = req.params; 
    const { titulo, conteudo, favorita, cor } = req.body; 
  
    try {
      const notaAtualizada = await notaModel.update(Number(id), { titulo, conteudo, favorita, cor });
      if (!notaAtualizada) {
        return res.status(404).json({ erro: "Nota não encontrada" });
      }
      res.json(notaAtualizada); // Retorna a nota atualizada
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao atualizar nota" });
    }
  };
  delete = async (req, res) => {
    const { id } = req.params;
    try {
      await notaModel.delete(Number(id));
      res.status(200).json({ mensagem: "Nota deletada com sucesso" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao deletar nota" });
    }
  };
}



export default new NotaController();