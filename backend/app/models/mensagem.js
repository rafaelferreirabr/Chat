'use strict';
module.exports = (sequelize, DataTypes) => {
  const Mensagem = sequelize.define('Mensagem', {
    nome: DataTypes.STRING,
    mensagem: DataTypes.STRING
  }, {});
  Mensagem.associate = function(models) {
    // associations can be defined here
  };
  return Mensagem;
};