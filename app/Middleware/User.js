'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class User {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request }, next) {
    const data = request.only(['type'])

    if (data.type === '' || data.type === null || data.type === undefined) {
      request.typeUser = 'client'
    } else {
      request.typeUser = 'admin'
    }

    await next()
  }
}

module.exports = User
