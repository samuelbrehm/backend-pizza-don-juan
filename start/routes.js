'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('users', 'UserController.store').middleware(['user'])
Route.get('userorders', 'UserController.show').middleware(['auth'])

Route.post('sessions', 'SessionController.store')

Route.group(() => {
  Route.resource('products', 'ProductController').apiOnly()
  Route.resource('products.typeproducts', 'TypeProductController').apiOnly()
  Route.resource('sizes', 'SizeController').apiOnly()
  Route.resource('orders', 'OrderController').apiOnly()
}).middleware(['auth'])
