const { Router } = require("express");
const controller = require('./controller');

const router = Router()

router.get('/', controller.getWeather)

router.post('/', controller.addCity)

router.get('/:city', controller.getWeatherByCity);



module.exports = router;