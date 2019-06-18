'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SizeSchema extends Schema {
  up () {
    this.alter('sizes', table => {
      table.dropColumn('id_type_product')
    })
  }

  down () {
    this.table('sizes', table => {
      // reverse alternations
    })
  }
}

module.exports = SizeSchema
