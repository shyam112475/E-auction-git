const {sequelize,DataTypes} = require('../utils/db')


const Bid = sequelize.define('Bid',
  {
    bid_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    auction_item_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Auction_Items', // Reference to the Auction_Items table
        key: 'auction_item_id', // Column in the Auction_Items table
      },
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users', // Reference to the Users table
        key: 'user_id', // Column in the Users table
      },
      allowNull: false,
    },
    bid_amount: {
      type: DataTypes.DECIMAL(10, 2), // Decimal with 2 decimal places for bid amount
      allowNull: false, // Bid amount is mandatory
    },
    //bid_time: {
     // type: DataTypes.TIMESTAMP,
    //  defaultValue: DataTypes.NOW, // Automatically set the current timestamp
   // },
  },
  {
    sequelize, // Your Sequelize instance
    modelName: 'Bid',
    tableName: 'Bids', // Explicitly setting the table name
  }
);

module.exports = Bid;
