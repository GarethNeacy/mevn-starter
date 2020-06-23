const express = require('express');
const controller = require('../controllers/foo.controller');

const router = express.Router();

router.get('/', controller.getFoos);

module.exports = router;
