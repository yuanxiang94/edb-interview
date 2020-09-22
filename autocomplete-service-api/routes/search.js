const express = require("express");
const request = require("request");
const router = express.Router();

router.get("/", function (req, res, next) {
  const { type, keyword } = req.query;
  console.log("calling");
  const apiUrl = "https://api.github.com/search";
  const url = `${apiUrl}/${type}?q=${keyword}`;
  const options = {
    host: "api.github.com",
    method: "GET",
    headers: { "user-agent": "express.js" },
  };
  request(url, options).pipe(res);
});

module.exports = router;
