'use strict'
const { Model } = require('sequelize')
const { Sequelize } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      id: {
        type: Sequelize.INTEGER,
        // defaultValue: DataTypes.UUIDV4,
        autoIncrement: true,
        primaryKey: true,
      },
      name: Sequelize.STRING,
      email: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Email-id required',
          },
          isEmail: {
            msg: 'Please enter a valid email address',
          },
        },
        unique: {
          args: true,
          msg: 'Email address already in use!',
        },
      },
      password: Sequelize.STRING,
      mobile: Sequelize.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    }
  )
  return User
}
