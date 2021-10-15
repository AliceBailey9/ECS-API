const data = require("../Data/carData.json");
const fs = require("fs");

const fetchAllCars = (cb) => {
  cb(null, data);
};

const addCar = (carData, cb) => {
  carData.id = data.length + 1;
  data.push(carData);
  fs.writeFile("./data/carData.json", JSON.stringify(data, null, 2), (err) => {
    if (err) console.log(err);
    else {
      cb(null, data);
    }
  });
};

module.exports = { fetchAllCars, addCar };
