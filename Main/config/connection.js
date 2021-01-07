const Sequelize = require('sequelize');
require('dotenv').config();

// let sequelize;

// if (process.env.JAWSDB_URL) {
//   sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
//   sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
//       host: 'us-cdbr-east-02.cleardb.com',
//       dialect: 'mysql',
//       port: 3306
//     }
//   );
// }

const sequelize = new Sequelize('heroku_d9efbeac990e67c', 'b59d10d8314e3b', '4d56178a', {
  host: 'us-cdbr-east-02.cleardb.com',
  dialect: 'mysql'
});

module.exports = sequelize;
