'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Size extends Model {
  prices () {
    return this.belongsToMany('App/Models/TypeProduct').pivotModel(
      'App/Models/Price'
    )
  }
}

module.exports = Size
