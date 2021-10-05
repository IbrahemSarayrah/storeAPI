'use strict';

const { Items } = require('../models/index');


async function createItems (req,res) {
  let itemsData = req.body;
  let items = await Items.create(itemsData);
  res.status(201).json(items);
}


async function getItems (req , res) {
  const id = parseInt(req.params.id);
  let items = await Items.get(id);
  res.status(200).json(items);
}

async function getAllItems(req, res) {
  let allItems = await Items.getAll();
  res.status(200).json(allItems);
}

async function updateItems (req , res) {
  const id = parseInt(req.params.id);
  let itemsData = req.body;
  let updateItems = await Items.update(id ,itemsData);
  res.status(200).json(updateItems);
}

async function deleteItems (req , res) {
  const id = parseInt(req.params.id);
  let deleteItems = await Items.delete(id);
  res.status(204).json(deleteItems);
}

module.exports = {
  createItems,
  getItems,
  getAllItems,
  updateItems,
  deleteItems,
};

