const { Router } = require("express")

const corongaController = require('./controllers/CoronaController')

const routes = Router()

routes.get('/coronga', corongaController.get)

module.exports = routes