const { Model } = require('objection');
const knex = require('../../db/knex')
Model.knex(knex)

class Item extends Model {
  static get tableName() {
    return 'm_item';
  }
  static get idColumn() {
    return ['id'];
  }
}

module.exports = Item;