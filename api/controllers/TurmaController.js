const db = require('../models/index.js');

class TurmaController {
    static async buscaTodasTurmas(req, res) {
        try {
            const todasTurmas = await db.Turmas.findAll();
            return res.status(200).json(todasTurmas);

        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async buscaTurmaId(req, res) {
        const id = req.params.id;

        try {
            const turma = await db.Turmas.findByPk(Number(id));
            return res.status(200).json(turma);

        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async criaTurma(req, res) {
        try {
            const turma = await db.Turmas.create(req.body);
            return res.status(201).json(turma);

        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async atualizaTurma(req, res) {
        const id = req.params.id;
        try {
            await db.Turmas.update(req.body, { where: { id: Number(id) } });
            const turmaAtualizada = await db.Turmas.findByPk(Number(id));
            return res.status(200).json(turmaAtualizada);

        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async apagaTurma(req, res) {
        const id = req.params.id;
        try {
            await db.Turmas.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ mensagem: `O registro ID ${id} foi apagado com sucesso.` });

        } catch (error) {
            return res.status(500).json(error.message);
        }

    }
}

module.exports = TurmaController;