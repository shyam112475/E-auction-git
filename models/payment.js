const {sequelize,DataTypes} = require('../utils/db')

const Payment = sequelize.define('Payment',
  {
    payment_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    bid_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Bids', // Reference to the Bids table
        key: 'bid_id', // Column in the Bids table
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
    payment_status: {
      type: DataTypes.ENUM('pending', 'completed', 'failed'),
      defaultValue: 'pending', // Default status is 'pending'
    },
    payment_method: {
      type: DataTypes.ENUM('credit_card', 'paypal', 'bank_transfer'),
      defaultValue: 'credit_card', // Default payment method is 'credit_card'
    },
    payment_amount: {
      type: DataTypes.DECIMAL(10, 2), // Decimal for the payment amount
      allowNull: false, // Payment amount is required
    },
    //payment_date: {
    //  type: DataTypes.TIMESTAMP,
    //  defaultValue: DataTypes.NOW, // Automatically sets the current timestamp when payment is made
    //},
  },
  {
    sequelize, // Your sequelize instance
    modelName: 'Payment',
    tableName: 'Payments', // Explicitly setting the table name
     // Since we are manually managing the timestamps
  }
);

module.exports = Payment;
