const Router = require('express')
const router = Router()
const { getRoutes, getRouteId, getRoutesAll, getLoggin } = require('../controllers/controller')
const { createFriend, getFriendsAll  } = require('../controllers/friend.controller')
const { getRoutesPosts, getRoutePost, createPost } = require('../controllers/posts.controller')


//routes
router.post('/users/register', getRoutes)

router.get('/users/:id', getRouteId)

router.get('/users', getRoutesAll)

router.post('/users/login', getLoggin)

//posts
router.get('/posts', getRoutesPosts)

router.get('/posts/:id', getRoutePost)

router.post('/', createPost)

router.post('/friends', createFriend)

router.get('/friends', getFriendsAll)





module.exports = router