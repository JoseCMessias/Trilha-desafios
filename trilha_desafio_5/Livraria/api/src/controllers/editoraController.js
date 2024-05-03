import editoraService from "../services/editoraService.js";

const getAllEditora = async (req, res) => {
  try {
    const editoras = await editoraService.getAllEditora();

    if (editoras.length === 0) {
      return res.status(404).json({ message: "Nenhum editora encontrado." });
    }

    return res.status(200).json(editoras);
  } catch (error) {
    console.error("Erro ao tentar buscar todas as editoras:", error);
    return res
      .status(500)
      .json({ message: "Ocorreu um erro ao buscar as editoras." });
  }
};

const getIdEditora = async (req, res) => {
  try {
    const editora = await editoraService.getIdEditora(req.params.id);

    if (!editora) {
      return res.status(404).json({ message: "Editora não encontrado." });
    }
    return res.status(200).json(editora);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Ocorreu um erro ao buscar a editora." });
  }
};

const postEditora = async (req, res) => {
  await editoraService.postEditora(req.body);
  return res.sendStatus(201);
};

const patchEditora = async (req, res) => {
  await editoraService.patchEditora(req.params.id, req.body);
  return res.sendStatus(200);
};

const deleteEditora = async (req, res) => {
  await editoraService.deleteEditora(req.params.id);
  return res.sendStatus(204);
};

export default {
  getAllEditora,
  getIdEditora,
  postEditora,
  patchEditora,
  deleteEditora,
};
