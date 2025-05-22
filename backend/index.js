const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

require('dotenv').config()

// Middleware
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}));

// Routes
const bookRoutes = require('./src/books/book.route');
app.use("/api/books", bookRoutes);

const orderRoutes = require('./src/orders/order.route');
app.use("/api/orders", orderRoutes);

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
