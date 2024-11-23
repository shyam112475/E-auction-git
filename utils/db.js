const {Sequelize,DataTypes} = require('sequelize')

const sequelize = new Sequelize('e_auction','root','Shyam@123',{
    host:'localhost',
    dialect:'mysql'
})


sequelize.authenticate()
.then(()=>{console.log('database connection is established')
})
.catch((err)=>{
    console.error(`somthing is gupup ${err}`)
})

module.exports = {sequelize,DataTypes};

