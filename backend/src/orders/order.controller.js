const Order = require('./order.model');
const Book = require('../books/book.model');

const createAOrder = async (req, res) => {
    try {
        const { name, email, address, phone, products } = req.body;
        if (!products || products.length === 0) {
            return res.status(400).json({ message: "Order must have at least one product." });
        }
        // products: [{ productId, quantity }]
        let totalPrice = 0;
        const detailedProducts = await Promise.all(products.map(async (item) => {
            const book = await Book.findById(item.productId);
            if (!book) throw new Error('Book not found');
            const price = book.newPrice;
            totalPrice += price * item.quantity;
            return {
                productId: book._id,
                title: book.title,
                price,
                quantity: item.quantity
            };
        }));
        const newOrder = new Order({
            name,
            email,
            address,
            phone,
            products: detailedProducts,
            totalPrice
        });
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
