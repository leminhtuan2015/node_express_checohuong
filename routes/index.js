var index_controller = require('../controllers/index_controller');

/* GET home page. */

module.exports = function(router){
  router.get('/', function(req, res, next) {
    index_controller.index(req, res, next)
  });
}
