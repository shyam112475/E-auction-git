const Payment = require('../models/payment')

exports.makepayment = async(req,res) => {
    const {payment_id,payment_method,payment_status,payment_date} = req.body
    const payment = new Payment({payment_id,payment_method,payment_status,payment_date})
     await payment.save()
    res.status(201).json(payment)

}