const db = require("../models/index.js");

class PessoaController {
    static async buscaTodasPessoas(req, res) {
        try {
            const todasPessoas = await db.Pessoas.findAll();
            return res.status(200).json(todasPessoas);

        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async buscaPessoaId(req, res) {
        const id = req.params.id;

        try {
            // const pessoa = await db.Pessoas.findOne({ where: { id: Number(id) } });
            const pessoa = await db.Pessoas.findByPk(Number(id));
            return res.status(200).json(pessoa);

        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async criaPessoa(req, res) {
        try {
            const pessoa = await db.Pessoas.create(req.body);
            return res.status(201).json(pessoa);

        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async atualizaPessoa(req, res) {
        const id = req.params.id;
        try {
            await db.Pessoas.update(req.body, { where: { id: Number(id) } });
            const pessoaAtualizada = await db.Pessoas.findByPk(Number(id));
            return res.status(200).json(pessoaAtualizada);

        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async apagaPessoa(req, res) {
        const id = req.params.id;
        try {
            await db.Pessoas.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ mensagem: `O registro ID ${id} foi apagado com sucesso.` });

        } catch (error) {
            return res.status(500).json(error.message);
        }

    }
}

module.exports = PessoaController;