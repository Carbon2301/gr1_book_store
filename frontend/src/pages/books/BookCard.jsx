import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { getImgUrl } from '../../utils/getImgUrl';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';
import { FaHeart } from "react-icons/fa";
import { useFavorites } from '../../context/FavoriteContext';

export const BookCard = ({book}) => {
  const dispatch = useDispatch();
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFavorite = favorites.some((item) => item._id === book._id);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }
  return (
    <div className="rounded-lg transition-shadow duration-300 hover:shadow-lg hover:scale-[1.02]">
  <div
    className="flex flex-col sm:flex-row sm:items-center sm:h-72 sm:justify-center gap-4"
  >
    <div className="sm:h-72 sm:flex-shrink-0 border rounded-md relative">
      <Link to={`/books/${book._id}`}>
        <img
          src={`${getImgUrl(book?.coverImage)}`}
          alt=""
          className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
        />
      </Link>
      {/* Icon Tym */}
      <button
        onClick={() => isFavorite ? removeFavorite(book._id) : addFavorite(book)}
        className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:scale-110 transition-transform"
        title={isFavorite ? "Bỏ yêu thích" : "Thêm vào yêu thích"}
      >
        <FaHeart color={isFavorite ? "#FF5581" : "#ccc"} size={22} />
      </button>
    </div>

    <div className="flex-1 min-w-0 overflow-hidden">
      <Link to={`/books/${book._id}`}>
      <h3 className="text-xl font-semibold hover:text-blue-600 mb-3 break-words whitespace-normal line-clamp-2">
          {book?.title}
      </h3>
      </Link>
      <p className="text-gray-600 mb-5 break-words whitespace-normal line-clamp-3">
        {book.description}
      </p>
      <p className="font-medium mb-5">
        ${book?.newPrice}
        {book?.oldPrice && (
          <span className="line-through font-normal ml-2">${book?.oldPrice}</span>
        )}
      </p>
      <button onClick={() => handleAddToCart(book)} className="btn-primary px-6 space-x-1 flex items-center gap-1 ">
        <FiShoppingCart className="" />
        <span>Add to Cart</span>
      </button>
    </div>
  </div>
</div>
  )
}

export default BookCard;