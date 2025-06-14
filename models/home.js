const mongoose = require('mongoose');
const favourites = require('./favourites');

const homeSchema = new mongoose.Schema({
  housename: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  photoUrl: {
    type: String,
  },
  description: {
    type: String,
  }
});

homeSchema.pre('findOneAndDelete', async function (next) {
  const homeId = this.getQuery()._id;
  await favourites.deleteMany({ houseId: homeId });
  next();

});

module.exports = mongoose.model('Home', homeSchema);





































// module.exports = class Home {

//   constructor(houseName, price, location, rating, photoUrl) {
//     this.houseName = houseName;
//     this.price = price;
//     this.location = location;
//     this.rating = rating;
//     this.photoUrl = photoUrl;
//   }

//   save() {

//   }

//   static find(callback) {

//   }

//   static findById(id, callback) {

//   }

//   static deleteById(id, callback) {


//   }
// }
