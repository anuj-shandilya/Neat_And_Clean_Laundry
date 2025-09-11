import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <a href="#" className={`text-2xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'
                            }`}>
                            Neat & Clean
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {['Home', 'Services', 'Location'].map((item) => (
                            <a
                                key={item}
                                href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                                className={`${isScrolled ? 'text-gray-600' : 'text-white'
                                    } hover:text-[#48C9B0] transition-colors duration-300`}
                            >
                                {item}
                            </a>
                        ))}
                        <button className="bg-[#48C9B0] text-white px-4 py-2 rounded-full hover:bg-[#3BB39B] transition-colors duration-300">
                            Contact Us
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`${isScrolled ? 'text-gray-600' : 'text-white'}`}
                            aria-label="Toggle menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {['Home', 'Services', 'Location'].map((item) => (
                                <a
                                    key={item}
                                    href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                                    className="block px-3 py-2 text-gray-600 hover:text-[#48C9B0] transition-colors duration-300"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item}
                                </a>
                            ))}
                            <button
                                className="w-full text-left px-3 py-2 text-[#48C9B0] hover:text-[#3BB39B] transition-colors duration-300"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Header;
