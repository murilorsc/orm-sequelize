const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');

const router = Router();

router
    .get('/pessoas', PessoaController.buscaTodasPessoas)
    .get('/pessoas/ativas', PessoaController.buscaPessoasAtivas)
    .get('/pessoas/:id', PessoaController.buscaPessoaId)
    .post('/pessoas/:id/matriculas', PessoaController.buscaMatriculasPorEstudante)
    .post('/pessoas/', PessoaController.criaPessoa)
    .post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
    .put('/pessoas/:id', PessoaController.atualizaPessoa)
    .delete('/pessoas/:id', PessoaController.apagaPessoa);

module.exports = router;