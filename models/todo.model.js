const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Todo = sequelize.define('es_todo', {
    user_id: DataTypes.INTEGER,
    todo: {
        type: DataTypes.STRING,
        allowNull : false
    },
}
, {
    underscored: true,
    timestamps: false,
    freezeTableName: true
}
);

module.exports = Todo;