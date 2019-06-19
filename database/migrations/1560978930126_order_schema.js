'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderSchema extends Schema {
  up () {
    this.alter('orders', table => {
      table.boolean('isAttended')
      table.text('comments')
    })
  }

  down () {
    this.table('orders', table => {
      // reverse alternations
    })
  }
}

module.exports = OrderSchema
