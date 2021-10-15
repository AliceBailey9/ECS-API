const express = require("express");
const { getAllCars, addYourCar } = require("../Controllers/CarsController");
const carsRouter = express.Router();

carsRouter.get("/", getAllCars);
carsRouter.post("/addCar", addYourCar);

module.exports = carsRouter;
