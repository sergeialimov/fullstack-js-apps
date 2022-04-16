const express = require('express');

const router = express.Router();

const websiteController = require('../controllers/website.controller');


router.post('/api/shorturl/new', websiteController.website_new);

router.get('/', websiteController.website_default);

router.get('/api/shorturl/:num', websiteController.website_open_short);


module.exports = router;
