const {
  fetchAllCars,
  addCar,
  fetchCar,
  deleteTheCar,
} = require("../Models/CardsModel");

const getAllCars = (req, res) => {
  fetchAllCars((err, cars) => {
    if (err) console.log(err);
    else {
      res.status(200).send(cars);
    }
  });
};

const getCar = (req, res) => {
  const { car_id } = req.params;
  fetchCar(car_id, (err, car) => {
    if (err) console.log(err);
    else {
      res.status(200).send(car);
    }
  });
};

const deleteCar = (req, res) => {
  const { car_id } = req.params;
  console.log(req);
  deleteTheCar(car_id, (err, car) => {
    if (err) console.log(err);
    else {
      res.status(200).send(car);
    }
  });
};

const addYourCar = (req, res) => {
  const carData = req.body;
  addCar(carData, (err, newCar) => {
    if (err) console.log(err);
    else {
      res.status(200).send(newCar);
    }
  });
};

module.exports = { getAllCars, addYourCar, getCar, deleteCar };
