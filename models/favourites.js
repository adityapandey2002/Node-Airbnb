const mongoose = require('mongoose');

const favouriteSchema = new mongoose.Schema({
  houseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Home',
    required: true,
    unique: true,

  }
});

module.exports = mongoose.model('Favourites', favouriteSchema);


// module.exports = class Favourites {
//   static addToFavourites(homeId, callback) {
//     Favourites.getFavourites((favourites) => {
//       if (favourites.includes(homeId)) {
//         callback("Home is already marked favourites");
//       } else {
//         favourites.push(homeId);
//         fs.writeFile(favouriteDataPath, JSON.stringify(favourites), callback);
//       }
//     })
//   }
//   static getFavourites(callback) {
//     fs.readFile(favouriteDataPath, (err, data) => {
//       callback(!err ? JSON.parse(data) : []);
//     });
//   }

//   static deleteById(delhomeId, callback) {
//     Favourites.getFavourites(homeIds => {
//       homeIds = homeIds.filter(homeId => delhomeId !== homeId);
//       fs.writeFile(favouriteDataPath, JSON.stringify(homeIds), callback);
//     })
//   };
// }
