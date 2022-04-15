'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(models.User, {
        as: 'followers',
        through: models.UserFollower,
        foreignKey: 'userId'
      }),
      User.belongsToMany(models.User, {
        as: 'following',
        through: models.UserFollower,
        foreignKey: 'followerId'
      }),
      User.belongsToMany(models.Comment, {
        as: 'comments',
        through: models.Comment,
        foreignKey: 'followerId'
      })
      User.hasMany(models.Project, { foreignKey: 'user_id'})

    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      passwordDigest: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  )
  return User

}
