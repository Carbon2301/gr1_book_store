const Order = require('./order.model');

const createAOrder = async (req, res) => {
    try {
        const newOrder = new Order(req.body);
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (error) {
        console.log("error in creating order", error);
        res.status(500).json({message: error.message});
    }
};

const getOrdersByEmail = async (req, res) => {
    try {
        const {email} = req.params;
        const orders = await Order.find({email}).sort({createdAt: -1});
        if(!orders) {
            return res.status(404).json({message: "No orders found"});
        }
        res.status(200).json(orders);
    } catch (error) {
        console.log("error in getting order", error);
        res.status(500).json({message: "Error in getting order"});
    }
}
module.exports = {
    createAOrder,
    getOrdersByEmail,
}
