
exports.up = function(knex, Promise) {
  return knex.schema.createTable('language', (table)=>{
    table.increments();
    table.integer('user_id').unsigned().references('id').inTable('users').onDelete('cascade');
    table.text('name').notNullable();
    table.integer('skill_level').notNullable();
    table.date('date_learned');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('language');
};
