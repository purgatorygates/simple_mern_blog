const express = require("express");
const server = express();
const articleRouter = require("./article/router");

const port = process.env.port || 4000;
server.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}`)
);

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use("/articles", articleRouter);
const mongoose = require("mongoose");
// connect to the database
mongoose.connect(`mongodb://localhost:27017/simple-mern-blog`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// open the connection
const connection = mongoose.connection;
connection.once("open", () => console.log("MongoDB connection established."));
