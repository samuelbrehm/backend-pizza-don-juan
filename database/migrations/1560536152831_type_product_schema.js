'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TypeProductSchema extends Schema {
  up () {
    this.create('type_products', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('type_products')
  }
}

module.exports = TypeProductSchema
