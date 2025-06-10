const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

require('dotenv').config()

// Middleware
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173', 'https://book-store-frontend-two-woad.vercel.app'],
    credentials: true
}));

// Routes
// Import routes
const bookRoutes = require('./src/books/book.route');
const orderRoutes = require('./src/orders/order.route');
const userRoutes = require('./src/users/user.route');
const adminRoutes = require('./src/stats/admin.stats');

// API routes
app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes); 
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);


async function main() {
    await mongoose.connect(process.env.DB_URL);
    app.use('/', (req, res) => {
        res.send('Hello An dep trai 123');
    })
}

main().then(() => console.log('Connected to MongoDB')).catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})