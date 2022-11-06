const express = require("express")
const router = express.Router();
const WeatherController = require("../controller/weather.controller")
router.get("/",WeatherController.HomePage)
router.post("/weatherreport",WeatherController.WeatherReport);
module.exports = router;
//01e470716e13c5703197da28f6eee3ff