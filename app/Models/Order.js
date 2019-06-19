'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {
  user () {
    return this.belongsTo('App/Models/User')
  }

  products () {
    return this.belongsToMany(
      'App/Models/Product',
      'id_order',
      'id_product',
      'id',
      'id'
    ).pivotModel('App/Models/ItemsOrder')
  }
}

module.exports = Order
