module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        devoured: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false,
        }
    });
    return Burger;
};