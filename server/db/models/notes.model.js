const { Sequelize, DataTypes } = require('sequelize');
const { sequelizeInstance } = require('..');

class Note extends Sequelize.Model { }
Note.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  value: {
    type: DataTypes.STRING
  },
  x: {
    type: DataTypes.INTEGER
  },
  y: {
    type: DataTypes.INTEGER
  },
}, {
  sequelize: sequelizeInstance, modelName: 'note'
});

module.exports = Note