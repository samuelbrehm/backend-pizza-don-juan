'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.alter('users', table => {
      table
        .string('username')
        .notNullable()
        .unique()
      table
        .string('email')
        .notNullable()
        .unique()
      table.string('password').notNullable()
      table.string('type')
    })
  }

  down () {
    this.table('users', table => {
      // reverse alternations
    })
  }
}

module.exports = UserSchema
