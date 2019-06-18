'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TypeProduct extends Model {
  sizes () {
    return this.belongsToMany('App/Models/Size').pivotModel('App/Models/Price')
  }

  product () {
    return this.belongsTo('App/Models/Product', 'id_product', 'id')
  }
}

module.exports = TypeProduct
