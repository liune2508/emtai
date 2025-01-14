const express = require('express');
const router = express.Router();
const corsController = require('../controllers/corsController');

// Định nghĩa route kiểm tra CORS
router.get('/check-cors', corsController.checkCors);

module.exports = router;
