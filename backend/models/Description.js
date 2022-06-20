module.exports = (sequelize, Sequelize) => {
    const Description = sequelize.define("description", {
        rating : {
            type: Sequelize.INTEGER,
        },
        description: {
            type: Sequelize.TEXT
        }
    }
      
    );
}