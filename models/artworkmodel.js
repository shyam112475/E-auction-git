const {sequelize,DataTypes} = require('../utils/db')


const Artwork = sequelize.define(
    {
      artwork_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      artist_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Artists', // Reference to the Artists table
          key: 'artist_id', // The column in Artists table
        },
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      year_created: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      medium: {
        type: DataTypes.STRING(100),
        allowNull: true, // e.g., oil, watercolor, etc.
      },
      dimensions: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      status: {
        type: DataTypes.ENUM('available', 'sold', 'under_auction'),
        defaultValue: 'available', // Default status is 'available'
      },
      image_url: {
        type: DataTypes.STRING(255),
        allowNull: true,
      }
    },
    {
      sequelize,
      modelName: 'Artwork',
      tableName: 'artworks',
      timestamps: false,
    }
  );
  
  module.exports = Artwork;