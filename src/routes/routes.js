const express = require('express');
const router = express.Router();
const app = express();
const path = require('path');

router.get('/', (req, res) => {
	res.render('conexionRappi/index', {});
});

module.exports = router;