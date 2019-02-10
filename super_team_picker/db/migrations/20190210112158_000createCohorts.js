
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cohorts', table => {
    table.increments('id');
    table.string('name');
    table.text('members');
    table.string('imageURL');
    table.timestamp('createAt').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cohorts');
};
