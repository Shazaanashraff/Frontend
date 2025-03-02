import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [showMenu, setShowMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [profileHovered, setProfileHovered] = useState(false);
    
    const { token, setToken } = useContext(AppContext);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setToken(null);
        navigate("/login");
    };

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/courts', label: 'Courts' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' }
    ];

    const socialIcons = [
        { icon: <FaFacebookF className="text-white" />, url: "#" },
        { icon: <FaTwitter className="text-white" />, url: "#" },
        { icon: <FaInstagram className="text-white" />, url: "#" }
    ];

    return (
        <motion.nav 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
                scrolled 
                ? 'py-3 bg-gray-900/90 shadow-lg shadow-purple-900/10' 
                : 'py-5 bg-gray-900/75'
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <motion.div 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.img 
                        onClick={() => navigate('/')} 
                        className="h-10 cursor-pointer" 
                        src={assets.logo} 
                        alt="KickOff Logo"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    />
                </motion.div>

                <motion.div 
                    className="hidden lg:block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <ul className="flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <NavLink 
                                key={item.path} 
                                to={item.path}
                                className="relative group"
                            >
                                {({ isActive }) => (
                                    <motion.li
                                        className={`text-sm font-medium uppercase tracking-wider transition-colors duration-300 px-1 py-2 ${
                                            isActive 
                                            ? 'text-pink-400' 
                                            : 'text-gray-300 hover:text-pink-400'
                                        }`}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + (index * 0.1) }}
                                    >
                                        {item.label}
                                        <motion.div 
                                            className="absolute bottom-0 left-0 h-0.5 bg-pink-500 rounded-full"
                                            initial={{ width: isActive ? "100%" : "0%" }}
                                            animate={{ width: isActive ? "100%" : "0%" }}
                                            whileHover={{ width: "100%" }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </motion.li>
                                )}
                            </NavLink>
                        ))}
                    </ul>
                </motion.div>

                <motion.div 
                    className="flex items-center space-x-6"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <div className="hidden md:flex items-center space-x-4">
                        {socialIcons.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.url}
                                className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 transition-all duration-300"
                                whileHover={{ scale: 1.15, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + (index * 0.1) }}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>

                    {token ? (
                        <motion.div 
                            className="relative z-20"
                            onHoverStart={() => setProfileHovered(true)}
                            onHoverEnd={() => setProfileHovered(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <motion.div 
                                className="flex items-center space-x-2 cursor-pointer"
                                whileHover={{ scale: 1.03 }}
                            >
                                <motion.div 
                                    className="relative w-10 h-10 overflow-hidden"
                                    whileHover={{ scale: 1.08 }}
                                >
                                    <img 
                                        className="w-full h-full rounded-full object-cover ring-2 ring-pink-500" 
                                        src={assets.profile_pic} 
                                        alt="Profile" 
                                    />
                                    <motion.div 
                                        className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-transparent rounded-full"
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                    />
                                </motion.div>
                                
                                <div className="text-gray-200">
                                    <div className="text-sm font-medium">My Account</div>
                                    <motion.svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        className="h-4 w-4 inline ml-1" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor"
                                        animate={{ rotate: profileHovered ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </motion.svg>
                                </div>
                            </motion.div>

                            <AnimatePresence>
                                {profileHovered && (
                                    <motion.div 
                                        className="absolute right-0 mt-2 w-56 bg-gray-900/95 backdrop-blur-md rounded-xl shadow-xl border border-purple-800/30 overflow-hidden"
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="p-3 border-b border-purple-900/30">
                                            <div className="font-medium text-white">John Doe</div>
                                            <div className="text-xs text-gray-400">john.doe@example.com</div>
                                        </div>
                                        
                                        <div className="py-2">
                                            {[
                                                { label: 'My Profile', action: () => navigate('/my-profile'), icon: "👤" },
                                                { label: 'My Bookings', action: () => navigate('/my-bookings'), icon: "🗓️" },
                                                { label: 'Settings', action: () => navigate('/settings'), icon: "⚙️" }
                                            ].map((item, index) => (
                                                <motion.div 
                                                    key={index}
                                                    className="flex items-center px-4 py-2 hover:bg-purple-900/30 cursor-pointer"
                                                    onClick={item.action}
                                                    whileHover={{ x: 5, backgroundColor: "rgba(126, 34, 206, 0.2)" }}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.1 * index }}
                                                >
                                                    <span className="mr-3 text-sm">{item.icon}</span>
                                                    <span className="text-gray-300">{item.label}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                        
                                        <motion.div 
                                            className="p-2 border-t border-purple-900/30"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            <motion.button
                                                className="flex items-center justify-center w-full px-4 py-2 text-sm text-white rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 transition-colors"
                                                onClick={handleLogout}
                                                whileHover={{ scale: 1.03 }}
                                                whileTap={{ scale: 0.97 }}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                                </svg>
                                                Sign Out
                                            </motion.button>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <motion.button 
                                onClick={() => navigate('/login')} 
                                className="hidden md:flex items-center space-x-2 px-6 py-2.5 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full font-medium transition-all duration-300"
                                whileHover={{ scale: 1.05, boxShadow: "0 4px 15px rgba(219, 39, 119, 0.25)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span>Sign In</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </motion.button>
                        </motion.div>
                    )}
                    
                    <motion.button
                        className="lg:hidden flex items-center text-gray-200"
                        onClick={() => setShowMenu(true)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FiMenu className="h-6 w-6" />
                    </motion.button>
                </motion.div>
            </div>
            
            <AnimatePresence>
                {showMenu && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-gray-900/95 backdrop-blur-md lg:hidden"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                    >
                        <div className="h-full flex flex-col overflow-y-auto">
                            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-800/50">
                                <motion.img
                                    src={assets.logo}
                                    alt="Logo"
                                    className="h-8"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                />
                                <motion.button
                                    onClick={() => setShowMenu(false)}
                                    className="p-2 rounded-full hover:bg-gray-800/50 text-white"
                                    whileHover={{ scale: 1.1, backgroundColor: "rgba(31, 41, 55, 0.5)" }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <FiX className="h-6 w-6" />
                                </motion.button>
                            </div>
                            
                            <div className="flex-1 px-6 py-8">
                                <ul className="space-y-4">
                                    {navItems.map((item, index) => (
                                        <motion.li
                                            key={item.path}
                                            initial={{ opacity: 0, x: -30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + (index * 0.1) }}
                                        >
                                            <NavLink
                                                to={item.path}
                                                onClick={() => setShowMenu(false)}
                                                className={({ isActive }) => 
                                                    `flex items-center py-3 px-4 rounded-lg text-lg font-medium ${
                                                        isActive 
                                                        ? 'text-pink-400 bg-purple-900/20' 
                                                        : 'text-gray-300 hover:text-pink-400 hover:bg-purple-900/10'
                                                    }`
                                                }
                                            >
                                                {item.label}
                                                {location.pathname === item.path && (
                                                    <motion.div 
                                                        className="ml-auto bg-pink-500 h-2 w-2 rounded-full"
                                                        layoutId="activeIndicator"
                                                    />
                                                )}
                                            </NavLink>
                                        </motion.li>
                                    ))}
                                </ul>
                                
                                {!token && (
                                    <motion.div
                                        className="mt-10"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <motion.button
                                            onClick={() => {
                                                navigate('/login');
                                                setShowMenu(false);
                                            }}
                                            className="w-full py-3.5 px-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-xl flex items-center justify-center"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Sign In / Create Account
                                        </motion.button>
                                    </motion.div>
                                )}
                            </div>
                            
                            <div className="p-6 border-t border-gray-800/50">
                                <motion.p
                                    className="text-gray-400 text-sm mb-4 text-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    Follow us on social media
                                </motion.p>
                                
                                <motion.div
                                    className="flex justify-center items-center space-x-5"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 }}
                                >
                                    {socialIcons.map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.url}
                                            className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-600"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.8 + (index * 0.1) }}
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            {social.icon}
                                        </motion.a>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;