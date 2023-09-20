const router = require("express").Router();
const detailsController = require("../controller/detailsController")

router.post(`/create`, detailsController.create);

module.exports = router