const express = require("express");
const request = require("request");
const router = express.Router();

router.get("/", function (req, res, next) {
  const { type, keyword, repository } = req.query;
  const apiUrl = "https://api.github.com/search";
  let url = `${apiUrl}/${type}?q=${keyword}`;
  let options = {
    host: "api.github.com",
    method: "GET",
    headers: { "user-agent": "express.js" },
  };

  if (repository != null) {
    url = `${apiUrl}/${type}?q=repo:${repository}+${keyword}&sort=author-date&order=desc`;
    options = {
      ...options,
      headers: {
        "user-agent": "express.js",
        Accept: "application/vnd.github.cloak-preview+json",
      },
    };
  }

  request(url, options).pipe(res);
});

module.exports = router;
