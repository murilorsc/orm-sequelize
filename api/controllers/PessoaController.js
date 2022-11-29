
const { PessoasServices } = require('../services'); //nome do arquivo eh index entao nao precisa por aqui
const pessoasServices = new PessoasServices();

class PessoaController {
    static async buscaTodasPessoas(req, res) {
        const order = ['nome'];

        try {
            const todasPessoas = await pessoasServices.buscaTodasPessoas(order);
            return res.status(200).json(todasPessoas);

        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async buscaPessoasAtivas(req, res) {
        const order = ['nome'];

        try {
            const pessoasAtivas = await pessoasServices.buscaTodasPessoasAtivas(order);
            return res.status(200).json(pessoasAtivas);

        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async buscaPessoaId(req, res) {
        const { id } = req.params;

        try {
            const pessoa = await pessoasServices.buscaRegistroPorId(Number(id));
            return res.status(200).json(pessoa);

        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async criaPessoa(req, res) {
        try {
            const pessoa = await pessoasServices.criaRegistro(req.body);
            return res.status(201).json(pessoa);

        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async atualizaPessoa(req, res) {
        const id = req.params.id;
        try {
            await pessoasServices.atualizaRegistroUnico(req.body, Number(id));
            const pessoaAtualizada = await pessoasServices.buscaRegistroPorId(Number(id));
            return res.status(200).json(pessoaAtualizada);

        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async apagaPessoa(req, res) {
        const id = req.params.id;
        try {
            await pessoasServices.apagaRegistro(Number(id));
            return res.status(200).json({ mensagem: `O registro ID ${id} foi apagado com sucesso.` });

        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async restauraPessoa(req, res) {
        const id = req.params.id;
        try {
            await pessoasServices.restauraRegistro(Number(id));
            return res.status(200).json({ mensagem: `O registro ID ${id} foi restaurado com sucesso.` });

        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async cancelaPessoa(req, res) {
        const { id } = req.params;
        try {

            await pessoasServices.cancelaPessoasMatriculas(Number(id));

            return res.status(200).json({ mensagem: `Estudante cancelado, id: ${id}` });

        } catch (error) {
            return res.status(500).json(error.message);
        }

    }
}

module.exports = PessoaController;