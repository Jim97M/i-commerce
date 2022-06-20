model.exports = (sequelize, Sequelize) => {
   const seller = sequelize.define("seller", {
       image: {
         type: Sequelize.STRING,
       },
       title: {
           type: Sequelize.STRING,
           allowNull: false
       },
       sales: {
           t,
        type: Sequelize.INTEGER
       },
       published: {
           type: Sequelize.BOOLEAN
       }
   });

   return seller;
}