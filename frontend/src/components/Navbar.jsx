import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { GiShoppingBag } from "react-icons/gi";
import { useSelector } from 'react-redux';
import avatarImg from '../assets/avatar.png'
import logo from '../assets/logo.png'
import { useAuth } from '../context/AuthContext';

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
    {
        name: "CheckOut",
        href: "/checkout",
    },
]

export const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const cartItems = useSelector(state => state.cart.cartItems);
    
    const {currentUser, logoutUser} = useAuth();
    const handleLogout = async () => {
        logoutUser();
        }
    return (
        <header className="max-w-screen-2xl mx-auto px-4 py-6">
            <nav className="flex justify-between items-center">
                {/* Left side */}
                <div className="flex items-center md:gap-16 gap-4">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="h-10 w-auto mr-2" />
                    </Link>

                    {/* search input */}
                    <div className="relative sm:w-72 w-40 space-x-2">
                        <FaSearch className="absolute inline-block top-1/2 left-3 -translate-y-1/2 text-gray-500" />
                        <input type="text" placeholder="Search here" className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none" />
                    </div>
                </div>

                {/* Right side */}
                <div className="relative flex items-center md:space-x-3 space-x-2">
                    <div>
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
                                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
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
                    
                    <button className="hidden sm:block">
                        <FaHeart className="size-6" />
                    </button>
                    <Link to="/cart" className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm">
                        <GiShoppingBag className="" />
                        {cartItems.length > 0 ? (
                            <span className="text-sm font-semibold sm:ml-1">{cartItems.length}</span>
                        ) : (
                            <span className="text-sm font-semibold sm:ml-1">0</span>
                        )
                    }
                </Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar;