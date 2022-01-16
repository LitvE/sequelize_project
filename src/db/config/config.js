require('dotenv/config');

module.exports = {
  development: {
    username: 'postqres',
    password: 'postgres',
    database: 'todo_test',
    host: 'localhost',
    port: 5432,
    dialect: "postgres",
    migrationStorage: 'json',
    seederStorage: 'json'
  },
  test: {},
  production: {}
}
