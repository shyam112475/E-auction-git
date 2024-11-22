const Auction = require('../models/auctionmodel')

exports.orgnizeAuction = async(req,res) => {
    const {auction_id,title,description,start_time,end_time,status} = req.res
    if(!auction_id||!title||description||!start_time||!end_time||!status)
    {
        return res.status(401).json('all fields reuired')
    }
    const auction = new Auction({auction_id,title,description,start_time,end_time,status})
    await auction.Save()
}