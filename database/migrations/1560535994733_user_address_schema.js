'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserAddressSchema extends Schema {
  up () {
    this.create('user_addresses', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('user_addresses')
  }
}

module.exports = UserAddressSchema
