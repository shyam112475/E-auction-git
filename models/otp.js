const {sequelize,DataTypes} = require('../utils/db')

const OTP = sequelize.define('OTP', {
    resetPasswordCode: {
      type: DataTypes.STRING(6), // Usually OTPs are 6 digits
      allowNull: false,
    },
    resetPasswordExpires: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  });
  
 
  

module.exports = OTP