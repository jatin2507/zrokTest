const fs = require("fs");
const http = require("http");
const https = require("https");
const express = require("express");
const app = express();

// Your express routes here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const httpServer = http.createServer(app);

httpServer.listen(3003, () => console.log("HTTP Server running on port 80"));
