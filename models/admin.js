const { sequelize,DataTypes } = require("../utils/db")

const Admin = sequelize.define('Admin',{
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true,
          }
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        isAd
  
})