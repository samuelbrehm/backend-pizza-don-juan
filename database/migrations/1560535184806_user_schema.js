'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.alter('users', table => {
      table.dropColumn('username')
      table.dropColumn('email')
      table.dropColumn('password')
    })
  }

  down () {
    this.table('users', table => {
      // reverse alternations
    })
  }
}

module.exports = UserSchema
