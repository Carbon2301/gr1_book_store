const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const mongoose = require('mongoose');
require('dotenv').config()


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
