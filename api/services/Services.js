const db = require('../models');


class Services {
    constructor(nomeDoModelo) {
        this.nomeDoModelo = nomeDoModelo;
    }

    async buscaTodosRegistros(order = []) {
        return db[this.nomeDoModelo].findAll({ order: [order] });
    };

    async buscaRegistroPorId(id) {
        return db[this.nomeDoModelo].findByPk(id);
    };

    async criaRegistro(dados = {}, transacao = {}) {
        return db[this.nomeDoModelo].create(dados, transacao);
    };

    async atualizaRegistroUnico(dadosAtualizados, id, transacao = {}) {
        return db[this.nomeDoModelo].update(dadosAtualizados, { where: { id: id } }, transacao);
    };

    async atualizaRegistros(dadosAtualizados, where, transacao = {}) {
        return db[this.nomeDoModelo].update(dadosAtualizados, { where: { ...where } }, transacao);
    };

    async apagaRegistro(id, transacao = {}) {
        return db[this.nomeDoModelo].destroy({ where: { id: id } }, transacao);
    };

    async restauraRegistro(id, transacao = {}) {
        return db[this.nomeDoModelo].restore({ where: { id: id } }, transacao);
    };
}

module.exports = Services;