'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TypeProduct extends Model {
  product () {
    return this.belongsTo('App/Models/Product')
  }

  sizes () {
    return this.hasMany('App/Models/Size')
  }
}

module.exports = TypeProduct
