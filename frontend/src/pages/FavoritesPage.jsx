import React from "react";
import { useFavorites } from "../context/FavoriteContext";
import { Link } from "react-router-dom";
import { getImgUrl } from "../utils/getImgUrl";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cart/cartSlice";
import Swal from "sweetalert2";

const FavoritesPage = () => {
  const { favorites, removeFavorite, clearFavorites } = useFavorites();
  const dispatch = useDispatch();

  const handleAddToCart = (book) => {
    dispatch(addToCart(book));
  };

  const handleRemoveAll = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This will remove all favorite books!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, remove all!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        clearFavorites();
        Swal.fire('Removed!', 'All favorite books have been removed.', 'success');
      }
    });
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Favorite Books</h2>
      {favorites.length > 0 && (
        <button
          onClick={handleRemoveAll}
          className="mb-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Remove All
        </button>
      )}
      {favorites.length === 0 ? (
        <p>You have no favorite books yet.</p>
      ) : (
        <ul>
          {favorites.map((book) => (
            <li
              key={book._id}
              className="flex items-center border-b py-4 gap-4"
            >
              <Link to={`/books/${book._id}`}>
                <img
                  src={getImgUrl(book.coverImage)}
                  alt={book.title}
                  className="w-16 h-24 object-cover rounded shadow"
                />
              </Link>
              <div className="flex-1">
                <Link to={`/books/${book._id}`} className="font-semibold hover:underline">
                  {book.title}
                </Link>
                <p className="text-gray-600 text-sm line-clamp-2">{book.description}</p>
                <div className="mt-1">
                  <span className="font-bold text-primary">${book.newPrice}</span>
                  {book.oldPrice && (
                    <span className="line-through text-gray-400 ml-2">${book.oldPrice}</span>
                  )}
                </div>
                <button
                  onClick={() => handleAddToCart(book)}
                  className="mt-2 px-3 py-1 bg-primary text-black rounded hover:bg-yellow-400 transition"
                >
                  Add to Cart
                </button>
              </div>
              <button
                onClick={() => removeFavorite(book._id)}
                className="text-red-500 hover:underline ml-2"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesPage; 