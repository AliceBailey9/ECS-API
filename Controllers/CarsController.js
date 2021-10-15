const { fetchAllCars, addCar } = require("../Models/CardsModel");

const getAllCars = (req, res) => {
  fetchAllCars((err, cars) => {
    if (err) console.log(err);
    else {
      res.status(200).send(cars);
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

module.exports = { getAllCars, addYourCar };
