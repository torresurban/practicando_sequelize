const User = require("../models/user.model");
const UserFriends = require("../models/userFriends");



const createFriend = async (req, res) => {

    const { userId, friendId } = req.body;
    const exist = await UserFriends.findOne({ where: { userId, friendId } });
    if(exist){
        return res
                .status(409)
                .json({ error: 'Ya existe' })
    }

    await UserFriends.create({ userId, friendId });
    return res.json({msg: 'amigo creado'})
}


const getFriendsAll = async (req, res) => {
    const users = await UserFriends.findAll();
    res.json(users)
}


module.exports = { 
    createFriend, 
    getFriendsAll
}