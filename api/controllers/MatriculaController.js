const db = require('../models/index.js');

class MatriculaController {
    static async buscaTodasMatriculas(req, res) {
        try {
            const todasMatriculas = await db.Matriculas.findAll();
            return res.status(200).json(todasMatriculas);

        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async buscaMatriculaId(req, res) {
        const id = req.params.id;

        try {
            const matricula = await db.Matriculas.findByPk(Number(id));
            return res.status(200).json(matricula);

        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async criaMatricula(req, res) {
        try {
            const matricula = await db.Matriculas.create(req.body);
            return res.status(201).json(matricula);

        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async atualizaMatricula(req, res) {
        const id = req.params.id;
        try {
            await db.Matriculas.update(req.body, { where: { id: Number(id) } });
            const matriculaAtualizada = await db.Matriculas.findByPk(Number(id));
            return res.status(200).json(matriculaAtualizada);

        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async apagaMatricula(req, res) {
        const id = req.params.id;
        try {
            await db.Matriculas.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ mensagem: `O registro ID ${id} foi apagado com sucesso.` });

        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async restauraMatricula(req, res) {
        const id = req.params.id;
        try {
            await db.Matriculas.restore({ where: { id: Number(id) } });
            return res.status(200).json({ mensagem: `O registro ID ${id} foi restaurado com sucesso.` });

        } catch (error) {
            return res.status(500).json(error.message);
        }

    }
}

module.exports = MatriculaController;