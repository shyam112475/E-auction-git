const Notification = require('../models/notificationmodel')

exports.alert = async(req,res) =>{
    const {notification_id,message,type,read_status} = req.body;
    const notification = await Notification.findOne({notification_id})
    res.status(200).json(notification)
}