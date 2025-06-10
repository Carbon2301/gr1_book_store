import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaUser, FaHeart, FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { useSelector } from 'react-redux';
import avatarImg from '../assets/avatar.png'
import logo from '../assets/logo.png'
import { useAuth } from '../context/AuthContext';
import { useFavorites } from '../context/FavoriteContext';
import { useTheme } from '../context/ThemeContext';

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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const cartItems = useSelector(state => state.cart.cartItems);
    const { favorites } = useFavorites();
    const { currentUser, logoutUser } = useAuth();
    const { isDark, toggleTheme } = useTheme();

    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = async () => {
        logoutUser();
        setIsDropdownOpen(false);
    }

    return (
        <header className={`
            fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out
            ${isScrolled 
                ? 'backdrop-blur-md bg-white/80 dark:bg-dark-bg/80 shadow-lg shadow-black/10' 
                : 'bg-white/90 dark:bg-dark-bg/90 backdrop-blur-sm'
            }
        `}>
            <nav className="max-w-screen-xl mx-auto flex items-center justify-between w-full px-4 sm:px-6 py-4 relative">
                {/* Left: Logo + Search */}
                <div className="flex items-center gap-x-4 sm:gap-x-8">
                    <Link
                        to="/"
                        className="flex-shrink-0 group"
                        onClick={() => setSearch("")}
                    >
                        <img 
                            src={logo} 
                            alt="Logo" 
                            className="h-10 w-auto transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" 
                        />
                    </Link>
                    
                    {/* Desktop Search */}
                    <div className="hidden md:block relative w-64 lg:w-80">
                        <div className="relative group">
                            <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 dark:text-gray-500 transition-colors duration-200 group-focus-within:text-primary" />
                            <input
                                type="text"
                                placeholder="Tìm kiếm sách hay..."
                                className="
                                    w-full py-3 pl-10 pr-4 rounded-xl border-0
                                    bg-gray-100/80 dark:bg-dark-card/50
                                    backdrop-blur-sm
                                    text-gray-900 dark:text-dark-text
                                    placeholder-gray-500 dark:placeholder-gray-400
                                    focus:outline-none focus:ring-2 focus:ring-primary/50
                                    transition-all duration-300
                                    hover:bg-gray-100 dark:hover:bg-dark-card/70
                                    focus:bg-white dark:focus:bg-dark-card
                                    focus:shadow-lg focus:shadow-primary/20
                                "
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* Right: Theme Toggle + User + Favorites + Cart + Mobile Menu */}
                <div className="flex items-center gap-x-2 sm:gap-x-4">
                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="
                            p-2 rounded-xl
                            bg-gray-100/80 dark:bg-dark-card/50
                            hover:bg-gray-200 dark:hover:bg-dark-card
                            transition-all duration-300
                            hover:scale-110 hover:rotate-12
                            group
                        "
                        aria-label="Toggle theme"
                    >
                        {isDark ? (
                            <FaSun className="w-5 h-5 text-yellow-500 group-hover:animate-pulse" />
                        ) : (
                            <FaMoon className="w-5 h-5 text-blue-600 group-hover:animate-pulse" />
                        )}
                    </button>

                    {/* User */}
                    <div className="relative">
                        {currentUser ? (
                            <>
                                <button 
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="group relative"
                                >
                                    <div className="
                                        relative p-1 rounded-full
                                        bg-gradient-to-r from-primary to-primary-light
                                        transition-all duration-300
                                        group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30
                                    ">
                                        <img
                                            src={avatarImg}
                                            alt="User Avatar"
                                            className="w-8 h-8 rounded-full border-2 border-white dark:border-dark-card"
                                        />
                                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-dark-card animate-pulse"></div>
                                    </div>
                                </button>
                                {/* Dropdown */}
                                {isDropdownOpen && (
                                    <div className="
                                        absolute top-full right-0 mt-2 w-56
                                        bg-white/95 dark:bg-dark-card/95
                                        backdrop-blur-md
                                        border border-gray-200 dark:border-gray-700
                                        rounded-xl shadow-xl shadow-black/10
                                        z-50 animate-slide-down
                                    ">
                                        <div className="p-2">
                                            {navigation.map((item, index) => (
                                                <Link 
                                                    key={item.name}
                                                    to={item.href} 
                                                    onClick={() => setIsDropdownOpen(false)}
                                                    className="
                                                        block px-4 py-3 text-sm font-medium
                                                        text-gray-700 dark:text-dark-text
                                                        hover:bg-primary/10 dark:hover:bg-primary/20
                                                        rounded-lg transition-all duration-200
                                                        hover:translate-x-1
                                                    "
                                                    style={{ animationDelay: `${index * 50}ms` }}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                            <hr className="my-2 border-gray-200 dark:border-gray-600" />
                                            <button 
                                                onClick={handleLogout}
                                                className="
                                                    block w-full text-left px-4 py-3 text-sm font-medium
                                                    text-red-600 dark:text-red-400
                                                    hover:bg-red-50 dark:hover:bg-red-900/20
                                                    rounded-lg transition-all duration-200
                                                "
                                            >
                                                Đăng xuất
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </>
                        ) : (
                            <Link 
                                to="/login"
                                className="
                                    p-2 rounded-xl
                                    bg-gray-100/80 dark:bg-dark-card/50
                                    hover:bg-gray-200 dark:hover:bg-dark-card
                                    transition-all duration-300
                                    hover:scale-110
                                    group
                                "
                            >
                                <FaUser className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors duration-200" />
                            </Link>
                        )}
                    </div>

                    {/* Favorites */}
                    <Link 
                        to="/favorites" 
                        className="
                            relative p-2 rounded-xl
                            bg-gray-100/80 dark:bg-dark-card/50
                            hover:bg-gray-200 dark:hover:bg-dark-card
                            transition-all duration-300
                            hover:scale-110
                            group
                        "
                    >
                        <FaHeart className="w-5 h-5 text-pink-500 group-hover:animate-pulse" />
                        {favorites.length > 0 && (
                            <span className="
                                absolute -top-1 -right-1 
                                bg-pink-500 text-white text-xs 
                                rounded-full w-5 h-5 
                                flex items-center justify-center
                                animate-bounce-subtle
                                shadow-lg shadow-pink-500/30
                            ">
                                {favorites.length}
                            </span>
                        )}
                    </Link>

                    {/* Cart */}
                    <Link 
                        to="/cart" 
                        className="
                            relative bg-gradient-to-r from-primary to-primary-light
                            hover:from-primary-light hover:to-primary
                            px-4 py-2 rounded-xl
                            flex items-center gap-2
                            text-white font-semibold
                            transition-all duration-300
                            hover:scale-105 hover:shadow-lg hover:shadow-primary/30
                            group
                        "
                    >
                        <GiShoppingBag className="w-5 h-5 group-hover:animate-bounce-subtle" />
                        <span className="text-sm font-bold">
                            {cartItems.length > 0 ? cartItems.length : 0}
                        </span>
                        {cartItems.length > 0 && (
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                        )}
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="
                            md:hidden p-2 rounded-xl
                            bg-gray-100/80 dark:bg-dark-card/50
                            hover:bg-gray-200 dark:hover:bg-dark-card
                            transition-all duration-300
                        "
                    >
                        {isMobileMenuOpen ? (
                            <FaTimes className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                        ) : (
                            <FaBars className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="
                        absolute top-full left-0 right-0 mt-2 mx-4
                        bg-white/95 dark:bg-dark-card/95
                        backdrop-blur-md
                        border border-gray-200 dark:border-gray-700
                        rounded-xl shadow-xl shadow-black/10
                        animate-slide-down
                        md:hidden
                    ">
                        <div className="p-4">
                            {/* Mobile Search */}
                            <div className="relative mb-4">
                                <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm sách hay..."
                                    className="
                                        w-full py-3 pl-10 pr-4 rounded-xl
                                        bg-gray-100 dark:bg-dark-bg
                                        text-gray-900 dark:text-dark-text
                                        placeholder-gray-500 dark:placeholder-gray-400
                                        focus:outline-none focus:ring-2 focus:ring-primary/50
                                        transition-all duration-300
                                    "
                                    value={search}
                                    onChange={e => setSearch(e.target.value)}
                                />
                            </div>
                            
                            {/* Mobile Navigation */}
                            {currentUser && navigation.map((item) => (
                                <Link 
                                    key={item.name}
                                    to={item.href} 
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="
                                        block px-4 py-3 text-sm font-medium
                                        text-gray-700 dark:text-dark-text
                                        hover:bg-primary/10 dark:hover:bg-primary/20
                                        rounded-lg transition-all duration-200 mb-1
                                    "
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Navbar;