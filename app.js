const express = require("express");
const path = require("path");

const mockData = require("./assets/mockapi/api.json");

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// An api endpoint that returns a short list of items
app.get("/api/getReviews", (req, res) => {
  res.status(200).json({
    success: true,
    data: mockData.data.slice(Math.max(mockData.data.length - 3, 0)),
  });
});

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);
