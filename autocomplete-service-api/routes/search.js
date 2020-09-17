const express = require('express');
const request = require('request')
const router = express.Router();

router.get('/:type/:keyword', function(req, res, next) {
    const apiUrl = 'https://api.github.com/search';
    const url = `${apiUrl}/${req.params.type}?q=${req.params.keyword}`;
    const options = {
        host: 'api.github.com',
        method: 'GET',
        headers: {'user-agent': 'express.js'}
    };
    request(url, options).pipe(res);
});

module.exports = router;