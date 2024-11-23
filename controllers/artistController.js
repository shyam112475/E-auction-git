const Artist = require('../models/artistmodel')

exports.artistinfo = async(req,res) => {
    const {artist_id,bio,website,social_media_links} = req.body
    if(!artist_id||!bio){
        res.status(400).json('id and bio are required')
    }
    const artist = await new Artist({artist_id:artist_id,bio:bio,website:website,social_media_links:social_media_links})
    await artist.save()
    res.status(201).json('artist profile created')
}

exports.fetchArtists = async(req,res) => {
    try{
      const getArtists = await Artist.findAndCountAll()
      res.status(200).json(getArtists)
      
    }catch(err){
       res.status(500).json(err)
    }
  }