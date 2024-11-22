const Bid = require('../models/bidmodel'); // Import the Bid model

exports.placebid =  async(req,res) => {
  try {
    const newBid = await Bid.create({
      auction_item_id: 1, // Assuming auction_item_id 1 exists
      user_id: 2, // Assuming user_id 2 exists (the user placing the bid)
      bid_amount: 150.00, // The bid amount
    });
    console.log('New bid placed:', newBid);
  } catch (error) {
    console.error('Error placing bid:', error);
  }
}

