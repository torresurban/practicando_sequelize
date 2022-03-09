const { DataTypes } = require('sequelize')
const sequelize = require('./db.model');
const Post = require('./posts.model');
const UserFriends = require('./userFriends');

const User = sequelize.define('User', {
  // Model attributes are defined here
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  tableName:'User'
});
Post.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Post, { foreignKey: 'userId' });

User.belongsToMany(User, { through: UserFriends, as:'friend', foreignKey:'friendId' })
User.belongsToMany(User, { through: UserFriends, as:'user', foreignKey:'userId' })
//UserFriends.belongsTo(User, { as:'friend' });
//UserFriends.belongsTo(User, { as:'user' })


module.exports = User;