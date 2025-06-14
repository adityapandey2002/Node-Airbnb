// core modules
const path = require("path");

// external module
const express = require("express");
const errorsController = require("./controllers/errors");
// local module
const { hostRouter } = require("./routes/hostRouter");
const storeRouter = require("./routes/storeRouter");
const rootDir = require("./utils/pathutil");
const mongoConnect = require("./utils/database");

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

app.use('/host', hostRouter);
app.use(storeRouter);

app.use(errorsController.pageNotFound);


PORT = 3000;
mongoConnect(client => {
  console.log(client);
  app.listen(PORT, () => {
    console.log(`App is running on the address http://localhost:${PORT}`);
  });
})

