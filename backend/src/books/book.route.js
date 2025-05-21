const express = require('express');
const router = express.Router();
const Book = require('./book.model');
const {postABook, getAllBooks, getSingleBook, updateABook, deleteABook} = require('./book.controller');

//frontend => backend => controller => book schema => database => send to server => frontend
//post a book
router.post("/create-book", postABook);

//get all books
router.get("/", getAllBooks);

//single book
router.get("/:id", getSingleBook);

//update a book
router.put("/edit/:id", updateABook);

//delete a book
router.delete("/:id", deleteABook);

module.exports = router;