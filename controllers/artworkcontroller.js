const Artwork = require('../models/artworkmodel')

exports.artdetails = async(req,res) => {
  const {artwork_id,title,description,year_created,medium,dimensions,price,status,image_url} = req.body

  if(!artwork_id||!title||!description||!year_created||!medium||!dimensions||!price||!status||!image_url){
          res.status(400).json('all fields required')
  }
  const artwork = new Artwork({artwork_id,title,description,year_created,medium,dimensions,price,status,image_url})
  await artwork.save()
  res.status(200).json("uploaded")
}

