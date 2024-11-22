//dependencies
const dotenv = require('dotenv').config()
const express = require('express')
const port = process.env.PORT
const path = require('path')

const app = express()

// required modules
const static_files = path.join(__dirname,'public')
require('./utils/db')
const userRoute = require('./routes/userRoute')
const pageRoute = require('./routes/page')
const adminRoute = require('./routes/adminRoute')
const artistRoute = require('./routes/artistRoute')
const artworkRoute = require('./routes/artworkRoute')
const auctionRoutes = require('./routes/auctionRoute')
const auctionItemRoute = require('./routes/auctionItemRoutes')
const bitRoute = require('./routes/bidRoute')
const paymentRoute = require('./routes/paymentRoute')
const notificationRoute = require('./routes/notificationRoute')

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(static_files))

//Routes end points of api
app.get('/', (req, res) => res.send('Hello World!'))
app.use('/user',userRoute)
app.use('/page',pageRoute)
app.use('/admin',adminRoute)
app.use('/artist',artistRoute)
app.use('/artwork',artworkRoute)
app.use('/auction',auctionRoutes)
app.use('/auctionitem',auctionItemRoute)
app.use('/bid',bitRoute)
app.use('/payment',paymentRoute)
app.use('notification',notificationRoute)

//listening 
app.listen(port, () => console.log(`listening to the port number ${port}`))



