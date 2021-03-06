const { Model, DataTypes } = require('Sequelize');
const sequelize = require('../config/connections');

//Post model
class Post extends Model {}

Post.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
},
    title: {
        type: DataTypes.STRING,
        allowNull: false
},
    content: {
        type: DataTypes.TEXT,
        allowNull: true
},
    user_id: {
        type: DataTypes.INTEGER,
        references: {
        model: 'user',
        key: 'id'
}}},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
});

module.exports = Post;