'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Size = use('App/Models/Size')

/**
 * Resourceful controller for interacting with sizes
 */
class SizeController {
  /**
   * Show a list of all sizes.
   * GET sizes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const sizes = await Size.query()
      .with('price')
      .fetch()

    return sizes
  }

  /**
   * Create/save a new size.
   * POST sizes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request }) {
    const data = request.only(['unity'])
    const price = request.only(['price', 'id_type_product'])

    const size = await Size.create(data)
    await size.price().create({
      id_size: size.id,
      price: price.price,
      id_type_product: price.id_type_product
    })

    return size
  }

  /**
   * Display a single size.
   * GET sizes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const size = await Size.findOrFail(params.id)

    return size
  }

  /**
   * Update size details.
   * PUT or PATCH sizes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request }) {
    const size = await Size.findOrFail(params.id)
    const data = request.only(['unity', 'price', 'id_type_product'])

    size.merge({ unity: data.unity })

    await size
      .price()
      .where('id_size', params.id)
      .where('id_type_product', data.id_type_product)
      .update({ price: data.price })

    await size.save()

    return size
  }

  /**
   * Delete a size with id.
   * DELETE sizes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params }) {
    const size = await Size.findOrFail(params.id)

    await size.delete()
  }
}

module.exports = SizeController
