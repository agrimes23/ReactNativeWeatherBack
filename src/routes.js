const { Router } = require("express");
const controller = require('./controller');

const router = Router()

router.get('/', controller.getWeather)

router.post('/', controller.addCity)

router.get('/:id', controller.getCityById)

router.get('/city/:city', controller.getWeatherByCity);

router.delete('/:id', controller.removeCityWeather)

module.exports = router;