const {sequelize,DataTypes} = require('../utils/db')

const AuctionItem = sequelize.define('AuctionItem',
  {
    auction_item_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    auction_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Auctions', // Reference to Auctions table
        key: 'auction_id', // Column in the Auctions table
      },
      allowNull: false,
    },
    artwork_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Artworks', // Reference to Artworks table
        key: 'artwork_id', // Column in the Artworks table
      },
      allowNull: false,
    },
    reserve_price: {
      type: DataTypes.DECIMAL(10, 2), // Decimal with 2 decimal places
      allowNull: true, 
    },
    status: {
      type: DataTypes.ENUM('listed', 'sold', 'unsold'),
      defaultValue: 'listed', // Default status is 'listed'
    },
  },
  {
    sequelize, 
    modelName: 'AuctionItem',
    tableName: 'Auction_Items',
  }
);

module.exports = AuctionItem;
