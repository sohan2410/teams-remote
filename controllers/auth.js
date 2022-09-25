const { sequelize } = require('../database/models')
const User = require('../database/models/user')
const userModel = User(sequelize)

const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')

class Controller {
  async singUp(req, res, next) {
    try {
      let { name, email, mobile, password } = req.body
      if (await userModel.findOne({ where: { email } })) {
        return res.status(200).send({ message: 'Email already in use!' })
      }
      password = await bcrypt.hash(password, 12)
      const user = await userModel.create({ name, email, mobile, password })
      const token = jwt.sign(user.toJSON(), process.env.TOKEN_SECRET)
      res.status(200).send({ message: 'Registration successful', data: { user, token } })
    } catch (error) {
      console.log(error)
      next(error)
    }
  }
}
module.exports = new Controller()
