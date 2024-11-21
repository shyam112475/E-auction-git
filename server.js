const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
require('./utils/db')
const path = require('path')
const port = process.env.PORT
const static_files = path.join(__dirname,'public')
const userRoute = require('./routes/userRoute')
const pageRoute = require('./routes/page')
//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(static_files))
console.log(userRoute)

app.get('/', (req, res) => res.send('Hello World!'))
app.use('/user',userRoute)
app.use('/page',pageRoute)


app.listen(port, () => console.log(`listening to the port number ${port}`))



