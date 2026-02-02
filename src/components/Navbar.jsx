import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Amenities', href: '#amenities' },
        { name: 'Rooms', href: '#rooms' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="container flex justify-between items-center">
                <a href="#" className="text-2xl font-bold bg-gradient-to-r from-pink-700 to-pink-600 bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-main)' }}>
                    Team Elite Women's PG
                </a>

                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium hover:text-pink-600 transition-colors"
                            style={{ color: scrolled ? 'var(--text-main)' : 'var(--text-main)' }} // Always legible
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" className="btn-primary text-sm px-6 py-2 rounded-full">Book Now</a>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-gray-800 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden absolute top-full left-0 w-full overflow-hidden bg-white shadow-xl border-t border-pink-100"
                        style={{ zIndex: 999 }} // Force high z-index
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg text-slate-800 font-medium py-3 px-4 hover:bg-pink-50 rounded-xl transition-all block active:scale-95"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                className="btn-primary text-center text-lg px-6 py-3 rounded-full mt-2 w-full block shadow-md active:scale-95 transition-transform"
                                onClick={() => setIsOpen(false)}
                            >
                                Book Now
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
