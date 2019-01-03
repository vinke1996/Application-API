'use strict';

exports.up = (knex, Promise) => {
  return knex.schema
    .createTable('weather_measures', (table) => {
      table
        .uuid('id')
        .primary()
        .notNullable()
        .defaultsTo(knex.raw("uuid_generate_v4()"))

      table
        .decimal('temperature')
        .notNullable()

      table
        .decimal('humidity')
        .notNullable()

      table
        .integer('light')
        .notNullable()

      table
        .string('raining')
        .notNullable()

      table
        .integer('moisture')
        .notNullable()

      table
        .timestamp('created_at').defaultTo(knex.fn.now());
    })

};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('weather_measures')
  ]);
};