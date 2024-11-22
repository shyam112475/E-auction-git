const { sequelize, DataTypes } = require('../utils/db');


const Artist = sequelize.define('Artist',
  {
    artist_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true, // Allowing user_id to be nullable if not all artists are users
      references: {
        model: 'Users', // Reference to the Users table
        key: 'user_id', // The column in Users table
      },
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    website: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    social_media_links: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Artist',
    tableName: 'Artists',
    timestamps: true, // since we're manually handling created_at and updated_at
  }
);

module.exports = Artist;
