const sequelize = require("./db.model");

const UserFriends = sequelize.define(
  "UserFriends",
  {},
  {
    freezeTableName: true,
  }
);

module.exports = UserFriends;
