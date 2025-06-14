
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

    }

  static fetchAll(callback) {

    }

  static findById(id, callback) {

    }

  static deleteById(id, callback) {


    }