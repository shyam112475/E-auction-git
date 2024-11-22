const AuctionItem = require('../models/auctionitemsModel')

exports.addAuctionItems = async(req,res) => {
    const {auction_item_id,reserve_price,status} = req.body
    if(!auction_item_id||!reserve_price||!status){
       return res.status(400).json('all fields required')
    }
    const auctionItems = new AuctionItem({auction_item_id,reserve_price,status})
    await auctionItems.save()
    res.status(201).json(auctionItems)

}