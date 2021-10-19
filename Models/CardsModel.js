const data = require("../Data/carData.json");
const fs = require("fs");

const fetchAllCars = (cb) => {
  cb(null, data);
};

const fetchCar = (car_id, cb) => {
  const car = data.filter((car) => car.id == car_id);
  cb(null, car[0]);
};

const deleteTheCar = (car_id, cb) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == car_id) {
      data.splice(i, 1);
    }
  }
  data.forEach((car, index) => (car.id = index + 1));
  fs.writeFile("./data/carData.json", JSON.stringify(data, null, 2), (err) => {
    if (err) console.log(err);
    else {
      cb(null, data);
    }
  });
};

const addCar = (carData, cb) => {
  data.push(carData);
  data.forEach((car, index) => (car.id = index + 1));
  fs.writeFile("./data/carData.json", JSON.stringify(data, null, 2), (err) => {
    if (err) console.log(err);
    else {
      cb(null, data);
    }
  });
};

module.exports = { fetchAllCars, addCar, fetchCar, deleteTheCar };
