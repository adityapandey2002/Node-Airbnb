// core modules
const rootDir = require("../utils/pathutil");
const fs = require('fs');
const path = require('path');

const registeredHomes = [];

module.exports = class Home {

  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  save() {
    Home.fetchAll((registeredHomes) => {
      if (this.id) {
        registeredHomes = registeredHomes.map((home) => {
          if (home.id === this.id) {
            return this;
          }
          return home;
        });
      } else {
        this.id = Math.random().toString();
        registeredHomes.push(this);
      }
      const filePath = path.join(rootDir, 'data', 'homes.json');
      fs.writeFile(filePath, JSON.stringify(registeredHomes), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(callback) {
    const filePath = path.join(rootDir, 'data', 'homes.json');
    fs.readFile(filePath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }

  static findById(id, cb) {
    getHomesFromFile(homes => {
      const home = homes.find(h => h.id === id);
      cb(home);
    });
  }

  static deleteById(id, callback) {
    this.fetchAll((homes) => {
      const updatedHomes = homes.filter((home) => home.id !== id);
      fs.writeFile(path.join(rootDir, "data", "homes.json"), JSON.stringify(updatedHomes), callback);
    });
  }

}