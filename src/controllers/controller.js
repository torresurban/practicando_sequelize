const { hash, verify } = require('../helpers/hash');
const Post = require('../models/posts.model');

const User = require('../models/user.model')


// users/register
const getRoutes = async (req, res) => {

    const { email, password } = req.body;
    const exist = await User.findOne({ where: { email } });
    if(exist){
        return res
                .status(409)
                .json({ error: 'Ya existe una cuenta con el correo electronico dado' })
    }

    const user = await User.create({ email, password: hash(password) });
    res.json({user})
}

// ruta para el loggin
const getLoggin = async (req, res) => {

    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if(!user){
        return res.status(401).json({
                        error:'Credenciales Incorrectas'
        });
    }

    let validar = verify(password, user.password)
    if(validar){
        return res.json({
            msg:"Welcome " + user.email,
            user
        });
    }
}


//Id específico
const getRouteId = async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id, { include:Post })

    if(!user){
        return res.status(404).json({
            error: 'User not found'
        })
    }
    res.json((
        user
    ))
}

// se muestra todo los usuarios
const getRoutesAll = async (req, res) => {
    const users = await User.findAll({ include:Post });
    res.json(users)
}


module.exports = {
    getRoutes,
    getRouteId,
    getRoutesAll,
    getLoggin
}