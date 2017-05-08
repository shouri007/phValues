var express = require('express')
var retrieve = require('../controllers/retrieve')
var add = require('../controllers/add')
var router = express.Router()

module.exports = function(app){
	router.post('/add',add);
	router.get('/retrieve',retrieve);
	app.use(router);
}
