import prisma from "../../prisma/client.js";

class produtoModel {
  getAll = async () => {
    return await prisma.produto.findMany();
  };

  getById = async (id) => {
    return await prisma.produto.findUnique({ where: { id } });
  };

  searchByTerm = async (category) => {
    return await prisma.produto.findMany({
      where: {
        OR: [
          { name: { contains: term, mode: "insensitive" } },
          { category: { contains: term, mode: "insensitive" } },
          { brand: { contains: term, mode: "insensitive" } },
        ],
      },
    });
  };

  create = async (name, price, category,brand,stock) => {

    const produto = await prisma.produto.create({
      data: {
        name,
        price,
        category,
        brand,
        stock,
      },
    });
    return produto;
    
  };

  update = async (id, data) => {
    return await prisma.produto.update({
      where: { id },
      data,
    });
  };

  delete = async (id) => {
    return await prisma.produto.delete({ where: { id } });
  };
}



export default new produtoModel();