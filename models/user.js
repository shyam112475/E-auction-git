const { sequelize, DataTypes } = require('../utils/db');


const User = sequelize.define('User', {
  user_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
    validate:{
      isEmail: true
    },
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('bidder', 'artist'),
    defaultValue: 'bidder',
  },
  phone: {
    type: DataTypes.STRING(15),
    allowNull: true, 
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: true,  
  },
 
}, {
  tableName: 'Users', 
  timestamps: false,  
})



module.exports = User;
