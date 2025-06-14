const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const MONGO_URL = 'mongodb+srv://adityapandeyadu:adityapandeyadu@cluster0.gyjb8sm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';


const mongoConnect = (callback) => {
  MongoClient.connect(MONGO_URL)
    .then(client => {
      callback(client);
    })
    .catch(error => {
      console.log("Error while connecting to MongoDB: ", error);
    });
}

module.exports = mongoConnect;