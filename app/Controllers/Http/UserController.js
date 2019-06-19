'use strict'

const Database = use('Database')
const User = use('App/Models/User')

class UserController {
  async store ({ request }) {
    const data = request.only(['username', 'email', 'password', 'type'])
    const addresses = request.input('addresses')

    data.type = request.typeUser

    const trx = await Database.beginTransaction()

    const user = await User.create(data, trx)
    await user.addresses().createMany(addresses, trx)

    await trx.commit()

    return user
  }

  async show ({ auth }) {
    const orders = await auth.user
      .orders()
      .with('products')
      .fetch()

    return orders
  }
}

module.exports = UserController
