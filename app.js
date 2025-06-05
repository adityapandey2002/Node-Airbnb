// core modules
const path = require("path");

// external module
const express = require("express");
const errorsController = require("./controllers/errors");
// local module
const { hostRouter } = require("./routes/hostRouter");
const userRouter = require("./routes/userRouter");
const rootDir = require("./utils/pathutil");

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

app.use('/host', hostRouter);
app.use(userRouter);

app.use(errorsController.pageNotFound);

PORT = 3000;
app.listen(PORT, () => {
  console.log(`App is running on the address http://localhost:${PORT}`);
});
