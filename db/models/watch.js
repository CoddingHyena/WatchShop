'use strict';

const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Watch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Watch.init({
    name: DataTypes.STRING,
    seria: DataTypes.STRING,
    photo1: DataTypes.STRING,
    photo2: DataTypes.STRING,
    photo3: DataTypes.STRING,
    description: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Watch',
  });
  return Watch;
};
