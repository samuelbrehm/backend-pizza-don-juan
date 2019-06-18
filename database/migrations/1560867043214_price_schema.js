'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PriceSchema extends Schema {
  up () {
    this.alter('prices', table => {
      table
        .integer('id_type_product')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('type_products')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
  }

  down () {
    this.table('prices', table => {
      // reverse alternations
    })
  }
}

module.exports = PriceSchema
