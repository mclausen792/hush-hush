exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('secrets', (table) => {
      table.increments().primary()
      table.string('secrets')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('secrets')
  ])
};
