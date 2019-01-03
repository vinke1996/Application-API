module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'hva_niels',
      password: 'hva_niels',
      database: 'hva_application_niels'
    },
    migrations: {
      tableName: 'migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    migrations: {
      tableName: 'migrations'
    }
  }
}
