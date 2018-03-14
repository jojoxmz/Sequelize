module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Buger", {
    burger_name: DataTypes.STRING,
    allowNull: false,
    devoured: DataTypes.BOOLEAN
  });
  return Burger;
};
