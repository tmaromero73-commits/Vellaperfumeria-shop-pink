
import React, { useState, useRef, useEffect } from 'react';
import type { View } from './types';
import type { Currency } from './currency';

// --- ICONS ---
const MenuIcon = () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

const CartIcon = () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const ChevronDownIcon = () => (
    <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
);

const NavLink: React.FC<{ onClick?: () => void, children: React.ReactNode, className?: string, onMouseEnter?: () => void, onMouseLeave?: () => void }> = ({ onClick, children, className, onMouseEnter, onMouseLeave }) => (
    <button 
        onClick={onClick} 
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-200 hover:text-rose-400 py-4 ${className}`}
    >
        {children}
    </button>
);

interface HeaderProps {
    onNavigate: (view: View, payload?: any) => void;
    currency: Currency;
    onCurrencyChange: (currency: Currency) => void;
    cartCount: number;
    onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, cartCount, onCartClick }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
    const shopDropdownRef = useRef<HTMLDivElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (shopDropdownRef.current && !shopDropdownRef.current.contains(event.target as Node)) {
                setIsShopDropdownOpen(false);
            }
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
                setIsMobileMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const categories = [
        { key: 'skincare', name: 'Cuidado Facial', icon: '✨' },
        { key: 'makeup', name: 'Maquillaje', icon: '💄' },
        { key: 'perfume', name: 'Fragancias', icon: '🌸' },
        { key: 'wellness', name: 'Wellness', icon: '🌿' },
        { key: 'men', name: 'Hombre', icon: '👞' },
        { key: 'hair', name: 'Cabello', icon: '💇‍♀️' },
        { key: 'personal-care', name: 'Higiene', icon: '🧼' },
        { key: 'accessories', name: 'Accesorios', icon: '👜' },
    ];

    const handleNavigate = (view: View, payload?: any) => {
        onNavigate(view, payload);
        setIsMobileMenuOpen(false);
        setIsShopDropdownOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 shadow-2xl w-full">
            {/* Top Info Bar (Paler Pink Style) */}
            <div className="bg-rose-50 text-rose-900 text-[9px] md:text-[10px] py-2 text-center font-bold uppercase tracking-[0.25em] border-b border-rose-100">
                Catálogo Oficial 2026: Envío Gratis en pedidos superiores a 35€
            </div>

            {/* Logo Area: Fondo blanco transparente para resaltar el logo original */}
            <div className="bg-white/95 backdrop-blur-md w-full border-b border-gray-100">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-12 py-3 md:py-5">
                    {/* Left: Mobile Toggle */}
                    <div className="md:hidden flex-1">
                        <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 text-black hover:text-rose-500">
                            <MenuIcon />
                        </button>
                    </div>
                    <div className="hidden md:flex flex-1"></div>

                    {/* Center: Logotipo Vellaperfumeria (Original Colors) */}
                    <div className="flex-1 flex justify-center">
                        <button onClick={() => handleNavigate('home')} className="flex items-center transition-transform hover:scale-105">
                            <img 
                                src="https://vellaperfumeria.com/wp-content/uploads/2024/06/vellaperfumeralogo.png" 
                                alt="Vellaperfumeria Logo" 
                                className="h-12 md:h-18 w-auto object-contain" 
                            />
                        </button>
                    </div>

                    {/* Right: Cart Icon */}
                    <div className="flex-1 flex justify-end">
                        <button 
                            onClick={onCartClick}
                            className="relative p-2 text-black hover:text-rose-500 transition-colors"
                        >
                            <CartIcon />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center border-2 border-white">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Desktop Nav Bar: Fondo Negro */}
            <div className="bg-black text-white w-full border-b border-gray-900">
                <nav className="hidden md:flex justify-center items-center space-x-12 max-w-7xl mx-auto h-14">
                    <NavLink onClick={() => handleNavigate('home')}>Inicio</NavLink>
                    
                    <div 
                        className="relative h-full flex items-center"
                        onMouseEnter={() => setIsShopDropdownOpen(true)}
                        onMouseLeave={() => setIsShopDropdownOpen(false)}
                    >
                        <NavLink className={isShopDropdownOpen ? 'text-rose-400' : ''}>
                            Tienda <ChevronDownIcon />
                        </NavLink>

                        {/* FULL WIDTH BLACK DROPDOWN */}
                        <div 
                            className={`fixed left-0 w-full bg-black border-t border-gray-800 shadow-2xl transition-all duration-300 transform origin-top z-40 ${isShopDropdownOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'}`}
                            style={{ top: '100%' }}
                        >
                            <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-4 lg:grid-cols-8 gap-6">
                                {categories.map(cat => (
                                    <button
                                        key={cat.key}
                                        onClick={() => handleNavigate('products', cat.key)}
                                        className="flex flex-col items-center gap-3 group/item p-4 rounded-xl hover:bg-white/5 transition-all"
                                    >
                                        <span className="text-3xl filter grayscale group-hover/item:grayscale-0 transition-all transform group-hover/item:scale-110">
                                            {cat.icon}
                                        </span>
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 group-hover/item:text-rose-400 text-center">
                                            {cat.name}
                                        </span>
                                    </button>
                                ))}
                            </div>
                            <div className="bg-rose-950/20 py-4 text-center border-t border-gray-900">
                                <button 
                                    onClick={() => handleNavigate('products', 'all')}
                                    className="text-[10px] font-black uppercase tracking-[0.3em] text-rose-400 hover:text-white transition-colors"
                                >
                                    Ver Todo el Catálogo 2026 →
                                </button>
                            </div>
                        </div>
                    </div>

                    <NavLink onClick={() => handleNavigate('ofertas')}>Ofertas</NavLink>
                    <NavLink onClick={() => handleNavigate('catalog')}>Catálogo 2026</NavLink>
                    <NavLink onClick={() => handleNavigate('ia')}>Asistente IA ✨</NavLink>
                </nav>
            </div>

            {/* Mobile Menu Drawer */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-[60] md:hidden">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
                    <div 
                        ref={mobileMenuRef}
                        className="absolute top-0 left-0 w-[85%] max-w-sm h-full bg-black text-white shadow-2xl flex flex-col border-r border-gray-800 animate-slide-right"
                    >
                        <div className="p-6 flex justify-between items-center border-b border-gray-900 bg-white/5">
                             <img 
                                src="https://vellaperfumeria.com/wp-content/uploads/2024/06/vellaperfumeralogo.png" 
                                alt="Logo" 
                                className="h-10 w-auto" 
                            />
                            <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex-grow overflow-y-auto py-6">
                            <div className="px-6 space-y-8">
                                <button onClick={() => handleNavigate('home')} className="block w-full text-left text-lg font-bold uppercase tracking-widest hover:text-rose-400">Inicio</button>
                                <div className="space-y-4">
                                    <p className="text-[10px] font-black text-rose-400 uppercase tracking-[0.3em]">Categorías</p>
                                    <div className="grid grid-cols-2 gap-2">
                                        {categories.map(cat => (
                                            <button 
                                                key={cat.key}
                                                onClick={() => handleNavigate('products', cat.key)}
                                                className="block w-full text-left text-[10px] font-bold uppercase tracking-wider text-gray-300 hover:text-white bg-white/5 p-3 rounded-lg border border-gray-800"
                                            >
                                                {cat.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <button onClick={() => handleNavigate('ofertas')} className="block w-full text-left text-lg font-bold uppercase tracking-widest hover:text-rose-400">Ofertas</button>
                                <button onClick={() => handleNavigate('catalog')} className="block w-full text-left text-lg font-bold uppercase tracking-widest hover:text-rose-400">Catálogo 2026</button>
                                <button onClick={() => handleNavigate('ia')} className="block w-full text-left text-lg font-bold uppercase tracking-widest text-rose-400">Asistente IA ✨</button>
                            </div>
                        </div>

                        <div className="p-6 border-t border-gray-900 bg-gray-950">
                             <a href="https://api.whatsapp.com/send?phone=34661202616" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 bg-green-600 text-white font-bold py-4 rounded-xl text-xs uppercase tracking-widest">
                                <span>WhatsApp Ayuda</span>
                             </a>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                @keyframes slide-right { from { transform: translateX(-100%); } to { transform: translateX(0); } }
                .animate-slide-right { animation: slide-right 0.3s ease-out forwards; }
            `}</style>
        </header>
    );
};

export default Header;
