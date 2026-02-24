import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navigation = [
        { name: '회사소개', href: '/about' },
        { name: '공지사항', href: '/notice' },
        { name: '문의하기', href: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-secondary-200">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Global">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="text-2xl font-bold text-primary-600 tracking-tighter">
                            DAUM
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={clsx(
                                    'text-sm font-medium transition-colors duration-200',
                                    isActive(item.href)
                                        ? 'text-primary-600'
                                        : 'text-secondary-600 hover:text-primary-600'
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden">
                        <button
                            type="button"
                            className="text-secondary-500 hover:text-secondary-900 p-2"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t border-secondary-100">
                        <div className="flex flex-col space-y-2">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className={clsx(
                                        'block px-3 py-2 rounded-md text-base font-medium',
                                        isActive(item.href)
                                            ? 'bg-primary-50 text-primary-600'
                                            : 'text-secondary-600 hover:bg-secondary-50 hover:text-secondary-900'
                                    )}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
