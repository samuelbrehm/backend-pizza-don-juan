'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TypeProductSchema extends Schema {
  up () {
    this.create('type_products', table => {
      table.increments()
      table.string('description').notNullable()
      table
        .integer('id_product')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('products')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('type_products')
  }
}

module.exports = TypeProductSchema
