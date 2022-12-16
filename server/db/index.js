const { Sequelize } = require("sequelize");
const { development } = require("./database");


const sequelizeInstance = new Sequelize(development)

async function initDb() {

  try {
    await sequelizeInstance.authenticate();
    console.log('Sequelize ok!');
    await sequelizeInstance.sync();
  }
  catch (e) {
    console.error(e);
  }
}

module.exports = { initDb, sequelizeInstance }