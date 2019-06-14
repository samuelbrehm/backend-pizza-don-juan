'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ItemsOrderSchema extends Schema {
  up () {
    this.create('items_orders', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('items_orders')
  }
}

module.exports = ItemsOrderSchema
