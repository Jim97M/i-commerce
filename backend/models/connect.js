const databaseConfig = require("../config/database_config");

const Sequelize = require("sequelize");

const sequelizeInstance = new Sequelize(databaseConfig.DB)