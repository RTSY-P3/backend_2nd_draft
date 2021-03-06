'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Project.belongsTo(models.User, {foreignKey: 'user_id'})
    }
  }
  Project.init({
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    image: DataTypes.STRING,
    user_id: {
      type: DataTypes.INTEGER, 
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    } 
  }, {
    sequelize,
    modelName: 'Project',
    tableName: 'projects'
  });
  return Project;
};