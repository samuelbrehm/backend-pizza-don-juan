'use strict'

const Database = use('Database')
const User = use('App/Models/User')

class UserController {
  async store ({ request }) {
    const data = request.only(['username', 'email', 'password', 'type'])
    const addresses = request.input('addresses')

    console.log(`Primeiro type ${data.type}`)
    data.type = request.typeUser
    console.log(`Segundo type ${data.type}`)

    const trx = await Database.beginTransaction()

    const user = await User.create(data, trx)
    await user.addresses().createMany(addresses, trx)

    await trx.commit()

    return user
  }
}

module.exports = UserController
