'use strict';

const POSTGRES_URI = process.env.POSTGRES_URI;

const { Sequelize, DataTypes } = require('sequelize');

const items = require('./items.model');
const Collection = require('./lib/collection.class');

let sequelize = new Sequelize(POSTGRES_URI, {});

const itemsModel = items(sequelize,DataTypes);

const itemsCollection = new Collection(itemsModel);


module.exports = {
  db : sequelize,
  Items : itemsCollection,
};