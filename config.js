module.exports = {
  env: process.env.NODE_ENV || 'development',
  database: require('./knexfile.js'),
  port: 3003,
  host: '0.0.0.0'
};