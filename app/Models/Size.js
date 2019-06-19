'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Size extends Model {
  price () {
    return this.hasMany('App/Models/Price', 'id', 'id_size')
  }
}

module.exports = Size
