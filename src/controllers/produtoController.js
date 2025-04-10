import produtoModel from "../models/produtoModel.js";

class produtoController {
  getAll = async (req, res) => {
    try {
      const produtos = await produtoModel.getAll();
      res.json(produtos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar produtos" });
    }
  };

  create = async (req, res) => {
    const { name, price, category,brand,stock } = req.body;
    
    
    try {
      if (!name || !price || !category || !brand || !stock) {
        return res.status(400).json({ erro: "Campos obrigatórios ou inválidos" });
      }
      const novoProduto = await produtoModel.create(name, price, category,brand,stock);
      res.status(201).json(novoProduto);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao criar um novo produto" });
    }
  };

  getById = async (req, res) => {
    const { id } = req.params;
    try {
      const produto = await produtoModel.getById(Number(id));
      if (!produto) return res.status(404).json({ erro: "Produto não encontrado" });
      res.json(produto);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar produto" });
    }
  };

  searchByTerm = async (req, res) => {
    const { category } = req.query;
    try {
      const produtos = await produtoModel.searchByTerm(category);
      res.json(produtos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar produtos" });
    }
  };

  

  update = async (req, res) => {
    const { id } = req.params; 
    const { name, price, category,brand,stock } = req.body; 
  
    try {
      const produtoAtualizado = await produtoModel.update(Number(id), { name, price, category,brand,stock });
      if (!produtoAtualizado) {
        return res.status(404).json({ erro: "Produto não encontrado" });
      }
      res.json(produtoAtualizado);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao atualizar produto" });
    }
  };
  delete = async (req, res) => {
    const { id } = req.params;
    try {
      await produtoModel.delete(Number(id));
      res.status(200).json({ mensagem: "Produto deletado com sucesso" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao deletar produto" });
    }
  };
}



export default new produtoController();