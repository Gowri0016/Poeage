
import React, { useContext, useState, useRef, useEffect } from 'react';
import { DContext } from '../Datacontext/Datacontext';

export const Header = () => {
    const { navbar } = useContext(DContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const menuRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false); // Dropdown close panna logic
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleMenuItemClick = () => {
        setMenuOpen(false); // Menu item click aagum pothu close pannum
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
    };

    return (
        <header className="fixed z-20 text-black w-full bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center px-4 md:px-8 h-16">
                {/* Logo */}
                <a href="/" className="text-lg font-bold flex items-center">
                    <img src={navbar.logo} alt="Logo"/>
                    
                </a>

                {/* Desktop Navbar */}
                <nav className="hidden md:flex items-center space-x-6 relative right-24">
                    <a href="/" className="hover:text-blue-600">{navbar.home}</a>
                    <div className="relative" ref={menuRef}>
                        <button
                            onClick={() => setMenuOpen((prev) => !prev)}
                            className="hover:text-blue-600 focus:outline-none items-center"
                        >
                            {navbar.menu} <i class="bi bi-caret-down-fill"></i>
                        </button>
                        {menuOpen && (
                            <div className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded-md py-2 w-32">
                                <a
                                    href="/internship"
                                    className="block px-4 py-2 hover:bg-blue-600 hover:text-white"
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
                        className="text-black focus:outline-none"
                    >
                        {mobileMenuOpen ? '❌' : '☰'}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white text-black px-4 py-4">
                    <a
                        href="/"
                        className="block py-2 hover:text-blue-600"
                        onClick={toggleMobileMenu}
                    >
                        {navbar.home}
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
