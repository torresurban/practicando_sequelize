const Post = require('../models/posts.model');
const User = require('../models/user.model');

// post/  crear posts
const createPost = async (req, res) => {

    const { content, userId } = req.body;
    const exist = await Post.findOne({ where: { userId } });
    if(content.length == 0 || !exist){
        return res
                .status(400)
                .json({ error: 'Post vacío' })
    }

    const userpost = await Post.create({ content, userId });
    return res.json({userpost})
}



// Post específico
const getRoutePost = async (req, res) => {
    const { id } = req.params;
    const post = await Post.findByPk(id, { include:User })

    if(!post){
        return res.status(404).json({
            error: 'Post not found'
        })
    }
    res.json((
        post
    ))
}

// se muestra todo los posts
const getRoutesPosts = async (req, res) => {
    const posts = await Post.findAll({ include:User });
    res.json(posts)
}


module.exports = {
    createPost,
    getRoutePost,
    getRoutesPosts,
    
}