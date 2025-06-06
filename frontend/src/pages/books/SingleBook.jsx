import React from 'react'
import { FiShoppingCart } from "react-icons/fi"
import { FaHeart } from "react-icons/fa";
import { useParams } from "react-router-dom"

import { getImgUrl } from '../../utils/getImgUrl';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';
import { useFetchBookByIdQuery } from '../../redux/features/books/booksApi';
import { useFavorites } from '../../context/FavoriteContext';

const SingleBook = () => {
    const {id} = useParams();
    const {data: book, isLoading, isError} = useFetchBookByIdQuery(id);

    const dispatch =  useDispatch();
    const { favorites, addFavorite, removeFavorite } = useFavorites();
    const isFavorite = book && favorites.some(item => item._id === book._id);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    const handleToggleFavorite = () => {
        if (!book) return;
        if (isFavorite) {
            removeFavorite(book._id);
        } else {
            addFavorite(book);
        }
    };

    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>Error happending to load book info</div>
  return (
    <div className="max-w-lg shadow-md p-5">
            <div className="flex items-center mb-6">
                <h1 className="text-2xl font-bold">{book.title}</h1>
                <button className="ml-4" onClick={handleToggleFavorite}>
                    <FaHeart className={isFavorite ? "text-red-500" : "text-gray-400"} />
                </button>
            </div>

            <div className=''>
                <div>
                    <img
                        src={`${getImgUrl(book.coverImage)}`}
                        alt={book.title}
                        className="mb-8"
                    />
                </div>

                <div className='mb-5'>
                    <p className="text-gray-700 mb-2"><strong>Author:</strong> {book.author || 'admin'}</p>
                    <p className="text-gray-700 mb-4">
                        <strong>Published:</strong> {new Date(book?.createdAt).toLocaleDateString()}
                    </p>
                    <p className="text-gray-700 mb-4 capitalize">
                        <strong>Category:</strong> {book?.category}
                    </p>
                    <p className="text-gray-700"><strong>Description:</strong> {book.description}</p>
                </div>

                <button onClick={() => handleAddToCart(book)} className="btn-primary px-6 space-x-1 flex items-center gap-1 ">
                    <FiShoppingCart className="" />
                    <span>Add to Cart</span>

                </button>
            </div>
        </div>
  )
}

export default SingleBook