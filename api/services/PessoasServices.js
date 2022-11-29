const db = require('../models');
const Services = require('./Services');

class PessoasServices extends Services {
    constructor() {
        super('Pessoas');
        this.matricula = new Services('Matriculas');
    }

    async buscaTodasPessoasAtivas(order = []) {
        return db[this.nomeDoModelo].findAll({ order: order });
    };

    async buscaTodasPessoas(order = []) {
        return db[this.nomeDoModelo].scope('todos').findAll({ order: order });
    };

    async cancelaPessoasMatriculas(estudanteId) {
        return db.sequelize.transaction(async transacao => {
            await super.atualizaRegistroUnico({ ativo: false }, estudanteId, { transaction: transacao });
            await this.matricula.atualizaRegistros({ status: 'cancelado' }, { estudante_id: estudanteId }, { transaction: transacao });

        });
    }
}

module.exports = PessoasServices;