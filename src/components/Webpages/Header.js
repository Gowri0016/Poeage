import React, { useContext, useState, useRef, useEffect } from 'react';
import { DContext } from '../Datacontext/Datacontext';
import { FaCaretDown, FaBars, FaTimes, FaBriefcase } from 'react-icons/fa';

export const Header = () => {
    const { navbar } = useContext(DContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const capitalizeFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleMenuItemClick = () => {
        setMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
    };

    return (
        <header className="fixed z-20 w-full bg-white shadow-md text-black">
            <div className="container mx-auto flex justify-between items-center px-4 md:px-8 h-16">
                {/* Logo */}
                <a href="/" className="text-lg w-72 h-64 font-bold flex items-center">
                    <img src={navbar.logo} alt="Logo" className="h-10" />
                </a>

                {/* Desktop Navbar */}
                <nav className="hidden md:flex items-center space-x-8">
                    <a href="/" className="hover:text-blue-600 transition">
                        {capitalizeFirst(navbar.home)}
                    </a>

                    {/* Dropdown Menu */}
                    <div className="relative" ref={menuRef}>
                        <button
                            onClick={() => setMenuOpen((prev) => !prev)}
                            className="flex items-center gap-1 hover:text-blue-600 transition"
                        >
                            <FaBriefcase className="text-lg" />
                            {capitalizeFirst(navbar.menu)}
                            <FaCaretDown />
                        </button>

                        {menuOpen && (
                            <div className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded-md py-2 w-40">
                                <a
                                    href="/internship"
                                    className="block px-4 py-2 hover:bg-blue-600 hover:text-white transition"
                                    onClick={handleMenuItemClick}
                                >
                                    Internship
                                </a>
                            </div>
                        )}
                    </div>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        className="text-2xl text-black focus:outline-none"
                    >
                        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white text-black px-4 py-4 space-y-2">
                    <a
                        href="/"
                        className="block py-2 hover:text-blue-600"
                        onClick={toggleMobileMenu}
                    >
                        {capitalizeFirst(navbar.home)}
                    </a>
                    <a
                        href="/internship"
                        className="block py-2 hover:text-blue-600"
                        onClick={toggleMobileMenu}
                    >
                        Internship
                    </a>
                </div>
            )}
        </header>
    );
};
