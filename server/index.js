const express = require("express");
const handler = require("./httpHandler");
const server = express();
const cors = require("cors");
const exerciseHandler = require("./exerciseHandler");
const bodyParser = require("body-parser");
const profileList = require("./profileHandler");
server.use(bodyParser.urlencoded());
server.use(bodyParser.json());
  server.use(cors())
server.use("/client", express.static("./jquery-mockup"))
server.use("/old", handler.main);
server.use("/exercises", exerciseHandler.router)
server.use("/profiles", profileList.router )
server.listen(4200);
console.log("http://localhost:3001");
