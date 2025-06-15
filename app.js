// core modules
const path = require("path");

// external module
const express = require("express");
const errorsController = require("./controllers/errors");
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const DB_PATH = "mongodb+srv://adityapandeyadu:adityapandeyadu@cluster0.gyjb8sm.mongodb.net/airbnb?retryWrites=true&w=majority&appName=Cluster0";

// local module
const { hostRouter } = require("./routes/hostRouter");
const storeRouter = require("./routes/storeRouter");
const { default: mongoose } = require("mongoose");
const { authRouter } = require("./routes/authRouter");

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

const store = new MongoDBStore({
  uri: DB_PATH,
  collection: 'sessions',
}
)

app.use(session({
  secret: "Aditya Pandey is a coder.",
  resave: false,
  saveUninitialized: true,
  store,
}));


// app.use((req, res, next) => {
//   req.session.isLoggedIn = req.session.isLoggedIn;
//   next();
// })

app.use(authRouter);
app.use('/host', hostRouter);
app.use('/host', (req, res, next) => {
  if (req.session.isLoggedIn) {
    next();
  } else {
    res.redirect('/login');
  }
})
app.use(storeRouter);

app.use(errorsController.pageNotFound);



const PORT = 3000;

mongoose.connect(DB_PATH)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`App is running on the address http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error while connecting to MongoDB", err);
  }) 