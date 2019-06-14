'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SizeSchema extends Schema {
  up () {
    this.create('sizes', table => {
      table.increments()
      table.string('unity').notNullable()
      table
        .integer('id_type_product')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('type_products')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('sizes')
  }
}

module.exports = SizeSchema
