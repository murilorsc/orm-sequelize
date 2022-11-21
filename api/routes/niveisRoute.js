const { Router } = require('express');
const NivelController = require('../controllers/NivelController.js');

const router = Router();

router
    .get('/niveis', NivelController.buscaTodosNiveis)
    .get('/niveis/:id', NivelController.buscaNivelId)
    .post('/niveis/', NivelController.criaNivel)
    .put('/niveis/:id', NivelController.atualizaNivel)
    .delete('/niveis/:id', NivelController.apagaNivel);

module.exports = router;