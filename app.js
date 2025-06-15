// core modules
const path = require("path");

// external module
const express = require("express");
const errorsController = require("./controllers/errors");
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

app.use((req, res, next) => {
  req.isLoggedIn = req.get('Cookie') ? req.get('Cookie').split('=')[1] === 'true' : false;
  next();
})

app.use(authRouter);
app.use('/host', hostRouter);
app.use('/host', (req, res, next) => {
  if (req.isLoggedIn) {
    next();
  } else {
    res.redirect('/login');
  }
})
app.use(storeRouter);

app.use(errorsController.pageNotFound);



const PORT = 3000;
const DB_PATH = "mongodb+srv://adityapandeyadu:adityapandeyadu@cluster0.gyjb8sm.mongodb.net/airbnb?retryWrites=true&w=majority&appName=Cluster0"
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