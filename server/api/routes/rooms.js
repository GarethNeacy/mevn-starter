const express = require('express');
const controller = require('../controllers/rooms');

const router = express.Router();

router.get('/', controller.getRooms);
router.get('/:roomCode', controller.getRoom);
router.post('/', controller.createRoom);

module.exports = router;
