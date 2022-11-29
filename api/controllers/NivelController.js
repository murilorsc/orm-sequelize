
const { NiveisServices } = require('../services'); //nome do arquivo eh index entao nao precisa por aqui
const niveisServices = new NiveisServices();

class NivelController {
    static async buscaTodosNiveis(req, res) {
        const order = ['id'];
        try {
            const todosNiveis = await niveisServices.buscaTodosRegistros(order);
            return res.status(200).json(todosNiveis);

        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async buscaNivelId(req, res) {
        const { id } = req.params;

        try {
            const nivel = await niveisServices.buscaRegistroPorId(Number(id));
            return res.status(200).json(nivel);

        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async criaNivel(req, res) {
        try {
            const nivel = await niveisServices.criaRegistro(req.body);
            return res.status(201).json(nivel);

        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async atualizaNivel(req, res) {
        const { id } = req.params;
        try {
            await niveisServices.atualizaRegistroUnico(req.body, id);
            const nivelAtualizada = await niveisServices.buscaRegistroPorId(Number(id));
            return res.status(200).json(nivelAtualizada);

        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async apagaNivel(req, res) {
        const { id } = req.params;
        try {
            await niveisServices.apagaRegistro(id);
            return res.status(200).json({ mensagem: `O registro ID ${id} foi apagado com sucesso.` });

        } catch (error) {
            return res.status(500).json(error.message);
        }

    }
}

module.exports = NivelController;