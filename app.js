// core modules
const path = require("path");

// external module
const express = require("express");
// local module
const hostRouter = require("./routes/hostRouter");
const userRouter = require("./routes/userRouter");
const rootDir = require("./utils/pathutil");

const app = express();

app.use(express.urlencoded());

app.use(userRouter);
app.use("/host", hostRouter);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

PORT = 3000;
app.listen(PORT, () => {
  console.log(`App is running on the address http://localhost:${PORT}`);
});
