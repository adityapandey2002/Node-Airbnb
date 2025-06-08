const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathutil");

const favouriteDataPath = path.join(rootDir, "data", "favourites.json");

module.exports = class Favourites {
  static addToFavourites(homeId, callback) {
    Favourites.getFavourites((favourites) => {
      if (favourites.includes(homeId)) {
        callback("Home is already marked favourites");
      } else {
        favourites.push(homeId);
        fs.writeFile(favouriteDataPath, JSON.stringify(favourites), callback);
      }
    })
  }
  static getFavourites(callback) {
    fs.readFile(favouriteDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }
}
