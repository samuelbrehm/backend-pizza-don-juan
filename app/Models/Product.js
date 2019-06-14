'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
  orders () {
    return this.belongsToMany('App/Models/Order').pivotModel(
      'App/Models/ItemsOrder'
    )
  }

  typeProducts () {
    return this.hasMany('App/Models/TypeProduct')
  }
}

module.exports = Product
