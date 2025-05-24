const mongoose = require('mongoose');
const express = require('express');
const Order = require('../orders/order.model');
const Book = require('../books/book.model');
const router = express.Router();


// Tinh toan lay thong tin cho dashboard admin
router.get("/", async (req, res) => {
    try {
        // 1. Tinh tong so luong don hang
        const totalOrders = await Order.countDocuments();

        // 2. Tinh tong so tien don hang
        const totalSales = await Order.aggregate([
            {
                $group: {
                    _id: null,
                    totalSales: { $sum: "$totalPrice" },
                }
            }
        ]);

        // 3. So luong sach trending
        const trendingBooksCount = await Book.aggregate([
            { $match: { trending: true } },  // Match only trending books
            { $count: "trendingBooksCount" }  // Return the count of trending books
        ]);
        
        const trendingBooks = trendingBooksCount.length > 0 ? trendingBooksCount[0].trendingBooksCount : 0;

        // 4. Tong so sach
        const totalBooks = await Book.countDocuments();

        // 5. Tong so tien ban hang theo thang
        const monthlySales = await Order.aggregate([
            {
                $group: {
                    _id: { $dateToString: { format: "%Y-%m", date: "$createdAt" } },
                    totalSales: { $sum: "$totalPrice" }, 
                    totalOrders: { $sum: 1 } 
                }
            },
            { $sort: { _id: 1 } }  
        ]);

        // Tra ve ket qua
        res.status(200).json({  totalOrders,
            totalSales: totalSales[0]?.totalSales || 0,
            trendingBooks,
            totalBooks,
            monthlySales, });
      
    } catch (error) {
        console.error("Error fetching admin stats:", error);
        res.status(500).json({ message: "Failed to fetch admin stats" });
    }
})

module.exports = router;