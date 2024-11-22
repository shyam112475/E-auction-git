const {sequelize,DataTypes} = require('../utils/db')

const Notification = sequelize.define("Notification",
  {
    notification_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users', // Reference to the Users table
        key: 'user_id', // Column in the Users table
      },
      allowNull: false, // Ensure each notification is linked to a user
    },
    message: {
      type: DataTypes.TEXT, // Store message as text
      allowNull: false, // Message field is required
    },
    type: {
      type: DataTypes.ENUM('bid_won', 'bid_placed', 'auction_update', 'outbid', 'payment'),
      allowNull: false, // The type field is mandatory
    },
    read_status: {
      type: DataTypes.ENUM('unread', 'read'),
      defaultValue: 'unread', // Default status is 'unread'
    },
    //created_at: {
    //  type: DataTypes.TIMESTAMP,
   //   defaultValue: DataTypes.NOW, // Automatically set to the current timestamp
   // },
  },
  {
    sequelize, // Your sequelize instance
    modelName: 'Notification',
    tableName:'Notifications'
  }
)

module.exports = Notification
