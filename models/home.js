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
    registeredHomes.push(this);

    const filePath = path.join(rootDir, 'data', 'homes.json');
    fs.writeFile(filePath, JSON.stringify(registeredHomes), (err) => {
      if (err) {
        console.log(err);
      }
    });


  }

  static fetchAll(callback) {
    const filePath = path.join(rootDir, 'data', 'homes.json');
    fs.readFile(filePath, (err, data) => {
      console.log("File read: ", err, data);
      callback(!err ? JSON.parse(data) : []);
    });

  }



}