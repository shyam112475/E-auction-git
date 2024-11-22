const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
require('./utils/db')
const path = require('path')
const port = process.env.PORT
const static_files = path.join(__dirname,'public')
const userRoute = require('./routes/userRoute')
const pageRoute = require('./routes/page')
const adminRoute = require('./routes/adminRoute')
const artistRoute = require('./routes/artistRoute')
const artworkRoute = require('./routes/artworkRoute')
//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(static_files))


app.get('/', (req, res) => res.send('Hello World!'))
app.use('/user',userRoute)
app.use('/page',pageRoute)
app.use('/admin',adminRoute)
app.use('/artist',artistRoute)
app.use('/upload',artworkRoute)


app.listen(port, () => console.log(`listening to the port number ${port}`))



