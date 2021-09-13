const express = require('express');
const router = express.Router();

const army = require('./army');
const buildings = require('./buildings');
const command = require('./command');
const department = require('./department');
const gear = require('./gear');
const strength = require('./strength');
const weaponary = require('./weaponary');

router.use('/army/', army);
router.use('/buildings/', buildings);
router.use('/command/', command);
router.use('/department/', department);
router.use('/gear/', gear);
router.use('/strength/', strength);
router.use('/weaponary/', weaponary);

module.exports = router;