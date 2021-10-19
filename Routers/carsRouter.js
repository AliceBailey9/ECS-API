const express = require("express");
const {
  getAllCars,
  addYourCar,
  getCar,
  deleteCar,
} = require("../Controllers/CarsController");
const carsRouter = express.Router();

carsRouter.get("/", getAllCars);
carsRouter.get("/:car_id", getCar);
carsRouter.post("/addcar", addYourCar);
carsRouter.delete("/:car_id", deleteCar);

module.exports = carsRouter;
