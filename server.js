//dependencies
const dotenv = require('dotenv')
const express = require('express')
const port =  3000
const path = require('path')
const cors = require('cors')
const app = express()

// required modules
const static_files = path.join(__dirname,'public')
require('./utils/db')
const userRoute = require('./routes/userRoute')
const adminRoute = require('./routes/adminRoute')
const artistRoute = require('./routes/artistRoute')
const artworkRoute = require('./routes/artworkRoute')
const auctionRoutes = require('./routes/auctionRoute')
const auctionItemRoute = require('./routes/auctionItemRoutes')
const bitRoute = require('./routes/bidRoute')
const paymentRoute = require('./routes/paymentRoute')
const notificationRoute = require('./routes/notificationRoute')
const resetRoute = require('./middlewares/resetPassword')


//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(static_files))

//Routes end points of api
app.get('/', (req, res) => res.send('Hello World!'))
app.use('/user',userRoute)
app.use('/admin',adminRoute)
app.use('/artist',artistRoute)
app.use('/artwork',artworkRoute)
app.use('/auction',auctionRoutes)
app.use('/auctionitem',auctionItemRoute)
app.use('/bid',bitRoute)
app.use('/payment',paymentRoute)
app.use('notification',notificationRoute)
app.use('/pass',resetRoute)

//const main = require('./middlewares/nodemailer')
//main


//listening 
app.listen(port, () => console.log(`listening to the port number ${port}`))



