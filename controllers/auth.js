const User = require('../database/models/user')
class Controller {
  async singUp(req, res, next) {
    try {
      const { name, email, mobile, password } = req.body
      User.findById(1).then((user) => {
        res.status(200).send(user)
      })
      res.status(200).send({ name, email, mobile, password })
    } catch (error) {
      next(error)
    }
  }
}
module.exports = new Controller()
