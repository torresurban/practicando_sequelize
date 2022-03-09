const express = require('express')
const router = require('./routes/users')

const app = express()
app.set('port', process.env.PORT || 3000)
app.use(express.json())

app.use(router)


app.listen(app.get('port'), () => {
    console.log('server running on port' + app.get('port'));
})