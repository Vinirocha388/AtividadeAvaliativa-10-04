import prisma from "../../prisma/client.js";

class NotaModel {
  getAll = async () => {
    return await prisma.nota.findMany();
  };

  getById = async (id) => {
    return await prisma.nota.findUnique({ where: { id } });
  };

  searchByTerm = async (term) => {
    return await prisma.nota.findMany({
      where: {
        OR: [
          { titulo: { contains: term, mode: "insensitive" } },
          { conteudo: { contains: term, mode: "insensitive" } },
        ],
      },
    });
  };

  create = async (titulo, conteudo, cor) => {

    const nota = await prisma.nota.create({
      data: {
        titulo,
        conteudo,
        cor,
      },
    });
    return nota;
    
  };

  update = async (id, data) => {
    return await prisma.nota.update({
      where: { id },
      data,
    });
  };

  delete = async (id) => {
    return await prisma.nota.delete({ where: { id } });
  };
}



export default new NotaModel();