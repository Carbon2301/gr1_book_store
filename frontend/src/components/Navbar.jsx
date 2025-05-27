import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { GiShoppingBag } from "react-icons/gi";
import { useSelector } from 'react-redux';
import avatarImg from '../assets/avatar.png'
import logo from '../assets/logo.png'
import { useAuth } from '../context/AuthContext';
import { useFavorites } from '../context/FavoriteContext';

const navigation = [
    {
        name: "Dashboard",
        href: "/dashboard",
    },
    {
        name: "Orders",
        href: "/orders",
    },
    {
        name: "Cart Page",
        href: "/cart",
    },
]

export const Navbar = ({ search, setSearch }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const cartItems = useSelector(state => state.cart.cartItems);
    const { favorites } = useFavorites();
    const {currentUser, logoutUser} = useAuth();
    const handleLogout = async () => {
        logoutUser();
    }
    return (
      <header className="w-full bg-white shadow">
        <nav className="max-w-screen-xl mx-auto flex items-center justify-between w-full px-2 sm:px-4 py-4 relative">
          {/* Left: Logo + Search */}
          <div className="flex items-center gap-x-4 sm:gap-x-8">
            <Link
              to="/"
              className="flex-shrink-0"
              onClick={e => {
                e.preventDefault();
                window.location.reload();
              }}
            >
              <img src={logo} alt="Logo" className="h-10 w-auto" />
            </Link>
            <div className="relative w-48 sm:w-64">
              <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search here"
                className="bg-[#EAEAEA] w-full py-2 pl-10 pr-4 rounded-md focus:outline-none"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </div>
          {/* Right: User, Tym, Cart */}
          <div className="flex items-center gap-x-4 sm:gap-x-6 relative">
            {/* User */}
            <div className="relative">
              {currentUser ? (
                <>
                  <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    <img
                      src={avatarImg}
                      alt="User Avatar"
                      className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-blue-500' : ''}`}
                    />
                  </button>
                  {/* show dropdown */}
                  {isDropdownOpen && (
                    <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                      <ul className="py-2">
                        {navigation.map((item) => (
                          <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                            <Link to={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                              {item.name}
                            </Link>
                          </li>
                        ))}
                        <li>
                          <button 
                            onClick={handleLogout}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</button>
                        </li>
                      </ul>
                    </div>
                  )}
                </>
              ) : (
                <Link to="/login">
                  <FaUser className="size-6" />
                </Link>
              )}
            </div>
            {/* Tym */}
            <Link to="/favorites" className="relative">
              <FaHeart className="size-6" />
              {favorites.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full px-1">
                  {favorites.length}
                </span>
              )}
            </Link>
            {/* Cart */}
            <Link to="/cart" className="bg-primary px-4 py-2 flex items-center rounded-sm">
              <GiShoppingBag />
              <span className="text-sm font-semibold ml-2">{cartItems.length > 0 ? cartItems.length : 0}</span>
            </Link>
          </div>
        </nav>
      </header>
    )
}

export default Navbar;