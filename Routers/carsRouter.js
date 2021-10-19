const express = require("express");
const {
  getAllCars,
  addYourCar,
  getCar,
} = require("../Controllers/CarsController");
const carsRouter = express.Router();

carsRouter.get("/", getAllCars);
carsRouter.get("/:car_id", getCar);
carsRouter.post("/addCar", addYourCar);

module.exports = carsRouter;
