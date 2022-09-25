const { sequelize } = require('../database/models')
const User = require('../database/models/user')
const userModel = User(sequelize)
class Controller {
  async index(req, res, next) {
    try {
      let { page, limit } = req.query

      const users = await userModel.findAndCountAll({
        limit,
        offset: page,
        where: {}, // conditions
      })
      res.status(200).send({ message: 'Users found', data: { users } })
    } catch (error) {
      next(error)
    }
  }
}
module.exports = new Controller()
