const { Router } = require("express");
const TurmaController = require("../controllers/TurmaController.js");

const router = Router();

router
    .get("/turmas", TurmaController.buscaTodasTurmas)
    .get("/turmas/:id", TurmaController.buscaTurmaId)
    .post("/turmas/", TurmaController.criaTurma)
    .put("/turmas/:id", TurmaController.atualizaTurma)
    .delete("/turmas/:id", TurmaController.apagaTurma);

module.exports = router;