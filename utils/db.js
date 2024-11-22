const {Sequelize,DataTypes} = require('sequelize')

const sequelize = new Sequelize(process.env.DBNAME,process.env.USER,process.env.PASSWORD,{
    host:process.env.HOST,
    dialect:process.env.DIALECT
})


sequelize.sync()
.then(()=>{console.log('database connection is established')
})
.catch((err)=>{
    console.error(`somthing is gupup ${err}`)
})

module.exports = {sequelize,DataTypes};

