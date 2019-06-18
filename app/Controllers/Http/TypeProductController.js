'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const TypeProduct = use('App/Models/TypeProduct')

/**
 * Resourceful controller for interacting with typeproducts
 */
class TypeProductController {
  /**
   * Show a list of all typeproducts.
   * GET typeproducts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ params }) {
    const typesProducts = await TypeProduct.query()
      .where('id_product', params.products_id)
      .with('product')
      .fetch()

    return typesProducts
  }

  /**
   * Create/save a new typeproduct.
   * POST typeproducts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ params, request }) {
    const data = request.only(['description'])

    const typesProducts = await TypeProduct.create({
      ...data,
      id_product: params.products_id
    })

    return typesProducts
  }

  /**
   * Display a single typeproduct.
   * GET typeproducts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const typesProducts = await TypeProduct.findOrFail(params.id)

    return typesProducts
  }

  /**
   * Update typeproduct details.
   * PUT or PATCH typeproducts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request }) {
    const typesProducts = await TypeProduct.findOrFail(params.id)
    const data = request.only(['description'])

    typesProducts.merge(data)

    await typesProducts.save()

    return typesProducts
  }

  /**
   * Delete a typeproduct with id.
   * DELETE typeproducts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params }) {
    const typesProducts = await TypeProduct.findOrFail(params.id)

    await typesProducts.delete()
  }
}

module.exports = TypeProductController
