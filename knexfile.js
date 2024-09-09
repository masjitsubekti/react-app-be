// Update with your config settings.
module.exports = {
  test: {
    client: "pg",
    connection: {
      database: "db_express",
      user: "postgres",
      password: "1234",
    },
    migrations: {
      directory: __dirname + "/db/migrations",
    },
    seeds: {
      directory: __dirname + "/db/seeds/test",
    },
  },
  development: {
    client: "pg",
    connection:
      "postgres://postgres:S@y@Br0nt0@114.30.89.34:5432/belajar_react",
      // connection:
      // "postgres://postgres:12345678@localhost:5432/belajar-react",
    migrations: {
      directory: __dirname + "/db/migrations",
    },
    seeds: {
      directory: __dirname + "/db/seeds/development",
    },
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + "/db/migrations",
    },
    seeds: {
      directory: __dirname + "/db/seeds/production",
    },
  },
};
