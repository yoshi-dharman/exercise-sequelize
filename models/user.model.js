const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Todo = require('./todo.model');

const User = sequelize.define('user', {
    name: {
        type: DataTypes.STRING,
        allowNull : false
    }
}
, {
    underscored: true,
    timestamps: false,
    freezeTableName: true
}
);

User.hasMany(Todo, {
    foreignKey: {
      name: 'user_id',
      allowNull: false,
      underscored: true,
      freezeTableName: true
    }
});

Todo.belongsTo(User, {
    foreignKey: {
      name: 'user_id',
      allowNull: false,
      underscored: true,
      freezeTableName: true
    }
})

module.exports = User;