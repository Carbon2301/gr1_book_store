const express = require('express');
const router = express.Router();
const Book = require('./book.model');
const {postABook, getAllBooks, getSingleBook, updateABook, deleteABook} = require('./book.controller');
const verifyAdminToken = require('../middleware/verifyAdminToken');

//frontend => backend => controller => book schema => database => send to server => frontend
//post a book
router.post("/create-book", verifyAdminToken, postABook);

//get all books
router.get("/", getAllBooks);

//single book
router.get("/:id", getSingleBook);

//update a book
router.put("/edit/:id", verifyAdminToken, updateABook);

//delete a book
router.delete("/:id", verifyAdminToken, deleteABook);

module.exports = router;