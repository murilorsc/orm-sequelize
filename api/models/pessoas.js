'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {

    static associate(models) {
      Pessoas.hasMany(models.Turmas, { foreignKey: 'docente_id' });
      Pessoas.hasMany(models.Matriculas, {
        foreignKey: 'estudante_id',
        scope: { status: 'confirmado' },
        as: 'aulasMatriculadas'
      });
    }
  }
  Pessoas.init({
    nome: {
      type: DataTypes.STRING,
      validate: {
        validaNome: function (dado) {
          if (dado.length < 3) { throw new Error('O nome deve conter mais que 3 caracteres.'); }
        }
      }
    },
    ativo: {
      type: DataTypes.BOOLEAN,
      validade: {
        isBoolean: function (dado) {
          if (typeOf(dado) == 'boolean') { throw new Error('O campos ativo só pode ser true ou false.'); }
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'digite um e-mail válido'
        }
      }
    },
    role: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    defaultScope: {
      where: { ativo: true }
    },
    scopes: {
      todos: {
        where: {}
      }
    },
    modelName: 'Pessoas',
  });

  return Pessoas;
};