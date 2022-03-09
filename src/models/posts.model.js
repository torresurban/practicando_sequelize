const { DataTypes } = require('sequelize')
const sequelize = require('./db.model');


const Post = sequelize.define('Post', {
  // Model attributes are defined here
  content: {
    type: DataTypes.STRING,
    allowNull: false
    
  }

}, {
  // Other model options go here
  tableName:'Post'
});



// `sequelize.define` also returns the model

module.exports = Post;