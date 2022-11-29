const app = require('../index.js');
const bodyParser = require('body-parser');
const pessoas = require('./pessoasRoute.js');
const turmas = require('./turmasRoute.js');
const niveis = require('./niveisRoute.js');
const matriculas = require('./matriculasRoute.js');

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ titulo: 'O servidor está escutando..' });
    }),
        app.use(
            bodyParser.json(),
            pessoas,
            niveis,
            turmas,
            matriculas
        );
};

module.exports = routes;


