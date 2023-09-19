const { addIncome } = require('../controllers/income');

const router = require('express').Router();

router.post('', addIncome)

module.exports = router