const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController.js");

const router = Router();

router
    .get("/pessoas", PessoaController.buscaTodasPessoas)
    .get("/pessoas/:id", PessoaController.buscaPessoaId)
    .post("/pessoas/", PessoaController.criaPessoa)
    .put("/pessoas/:id", PessoaController.atualizaPessoa)
    .delete("/pessoas/:id", PessoaController.apagaPessoa);

module.exports = router;