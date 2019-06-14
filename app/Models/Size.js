'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Size extends Model {
  typeProduct () {
    return this.belongsTo('App/Models/TypeProduct')
  }

  prices () {
    return this.hasOne('App/Models/Price')
  }
}

module.exports = Size
