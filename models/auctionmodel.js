const {sequelize,DataTypes} = require('../utils/db')


const Auction = sequelize.define('Auction',
  {
    auction_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM('upcoming', 'live', 'completed'),
      defaultValue: 'upcoming', // Default value for auction status
    },
  },
  {
    sequelize, // Your sequelize instance
    modelName: 'Auction',
    tableName: 'Auctions', // Explicitly setting the table name
  }
);

module.exports = Auction;
