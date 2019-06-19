'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
  orders () {
    return this.belongsToMany(
      'App/Models/Order',
      'id_product',
      'id_order',
      'id',
      'id'
    ).pivotModel('App/Models/ItemsOrder')
  }

  typeProducts () {
    return this.hasMany('App/Models/TypeProduct', 'id', 'id_product')
  }
}

module.exports = Product
