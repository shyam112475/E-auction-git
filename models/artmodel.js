const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User'); // Assuming the User model is defined in the same directory

class Artwork extends Model {}

Artwork.init({
  artwork_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  seller_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'user_id',
    },
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  artist_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: DataTypes.TEXT,
  category: {
    type: DataTypes.ENUM('painting', 'sculpture', 'collectible'),
    allowNull: false,
  },
  medium: DataTypes.STRING,
  dimensions: DataTypes.STRING,
  image_url: DataTypes.STRING,
  video_url: DataTypes.STRING,
  starting_price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  reserve_price: DataTypes.DECIMAL,
  auction_start_time: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  auction_end_time: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  sequelize,
  modelName: 'Artwork',
  tableName: 'artworks',
  timestamps: false,
});

Artwork.belongsTo(User, { foreignKey: 'seller_id' }); // A user (seller) has many artworks

module.exports = Artwork;
