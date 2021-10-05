'use strict';

const express = require('express');
const router = express.Router();

const {
  getItems,
  createItems,
  getAllItems,
  updateItems,
  deleteItems,

} = require('../modules/items-routes-implementations');

router.post('/Items' , createItems);
router.get('/Items/:id', getItems);
router.get('/Items', getAllItems);
router.put('/Items/:id', updateItems);
router.delete('/Items/:id', deleteItems);

module.exports = router;