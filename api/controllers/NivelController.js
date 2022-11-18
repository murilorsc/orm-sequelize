const db = require("../models/index.js");

class NivelController {
    static async buscaTodosNiveis(req, res) {
        try {
            const todosNiveis = await db.Niveis.findAll();
            return res.status(200).json(todosNiveis);

        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async buscaNivelId(req, res) {
        const id = req.params.id;

        try {
            const nivel = await db.Niveis.findByPk(Number(id));
            return res.status(200).json(nivel);

        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async criaNivel(req, res) {
        try {
            const nivel = await db.Niveis.create(req.body);
            return res.status(201).json(nivel);

        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async atualizaNivel(req, res) {
        const id = req.params.id;
        try {
            await db.Niveis.update(req.body, { where: { id: Number(id) } });
            const nivelAtualizada = await db.Niveis.findByPk(Number(id));
            return res.status(200).json(nivelAtualizada);

        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async apagaNivel(req, res) {
        const id = req.params.id;
        try {
            await db.Niveis.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ mensagem: `O registro ID ${id} foi apagado com sucesso.` });

        } catch (error) {
            return res.status(500).json(error.message);
        }

    }
}

module.exports = NivelController;