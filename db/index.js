const { Sequelize } = require("sequelize");
const databaseConfig = require("../config/sequelize");

const env = process.env.NODE_ENV || 'development';

async function dbInit () {
    try {
        // Initialize sequelize with PostgreSQL
        const sequelize = new Sequelize(databaseConfig[env]);
        
        // Sync the models with the database
        await sequelize.sync();
        console.log("================")
        console.log('Database synced successfully');
        console.log("================")
    } catch (error) {
        console.error("Error:", error.message)
    }

}

module.exports = { dbInit }