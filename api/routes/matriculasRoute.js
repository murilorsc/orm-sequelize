const { Router } = require('express');
const MatriculaController = require('../controllers/MatriculaController.js');

const router = Router();

router
    .get('/matriculas', MatriculaController.buscaTodasMatriculas)
    .get('/matriculas/:id', MatriculaController.buscaMatriculaId)
    .post('/matriculas/', MatriculaController.criaMatricula)
    .post('/matriculas/:id/restaura', MatriculaController.restauraMatricula)
    .put('/matriculas/:id', MatriculaController.atualizaMatricula)
    .delete('/matriculas/:id', MatriculaController.apagaMatricula);

module.exports = router;