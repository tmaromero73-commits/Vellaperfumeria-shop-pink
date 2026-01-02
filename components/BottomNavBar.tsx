
import React from 'react';
import type { View } from './types';

const HomeIcon = ({ isActive }: { isActive: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={isActive ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={isActive ? 2 : 1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);

const ShopIcon = ({ isActive }: { isActive: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={isActive ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={isActive ? 2 : 1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
);

const IAIcon = ({ isActive }: { isActive: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${isActive ? 'text-fuchsia-600' : ''}`} fill={isActive ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={isActive ? 2 : 1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
    </svg>
);

const CatalogIcon = ({ isActive }: { isActive: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={isActive ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={isActive ? 2 : 1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
);

const GiftIcon = ({ isActive }: { isActive: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={isActive ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={isActive ? 2 : 1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 012-2h2a2 2 0 012 2v2m-6 0h6m-6 0a2 2 0 00-2 2v11a2 2 0 002 2h6a2 2 0 002-2V10a2 2 0 00-2-2h-6z" />
    </svg>
);

interface BottomNavBarProps {
    onNavigate: (view: View, payload?: any) => void;
    currentView: View;
}

const BottomNavBar: React.FC<BottomNavBarProps> = ({ onNavigate, currentView }) => {
    const navItems = [
        { view: 'home' as View, label: 'Inicio', icon: HomeIcon },
        { view: 'products' as View, label: 'Tienda', icon: ShopIcon, payload: 'all' },
        { view: 'ia' as View, label: 'IA', icon: IAIcon },
        { view: 'catalog' as View, label: 'Catálogo', icon: CatalogIcon },
        { view: 'ofertas' as View, label: 'Ofertas', icon: GiftIcon },
    ];

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-gray-200 shadow-[0_-10px_30px_rgba(0,0,0,0.05)] z-50 pb-safe h-20">
            <nav className="flex justify-around items-center h-full px-2">
                {navItems.map(item => {
                    const isActive = currentView === item.view || (item.view === 'products' && currentView === 'productDetail');
                    const Icon = item.icon;

                    return (
                        <button
                            key={item.label}
                            onClick={() => {
                                onNavigate(item.view, item.payload);
                                window.scrollTo(0, 0);
                            }}
                            className={`relative flex flex-col items-center justify-center w-full h-full transition-all duration-300 active:scale-90 ${isActive ? 'text-fuchsia-600' : 'text-gray-400'}`}
                        >
                            <div className={`p-1 transition-transform duration-300 ${isActive ? '-translate-y-1' : ''}`}>
                                <Icon isActive={isActive} />
                            </div>
                            <span className={`text-[10px] font-bold mt-1 tracking-tight transition-all ${isActive ? 'opacity-100 scale-100' : 'opacity-80 scale-95'}`}>
                                {item.label}
                            </span>
                            {isActive && (
                                <div className="absolute top-0 w-8 h-1 bg-fuchsia-600 rounded-b-full shadow-[0_0_15px_rgba(217,70,239,0.6)] animate-fade-in"></div>
                            )}
                        </button>
                    );
                })}
            </nav>
            <style>{`
                .pb-safe { padding-bottom: env(safe-area-inset-bottom); }
                @keyframes fade-in { from { opacity: 0; transform: scaleX(0); } to { opacity: 1; transform: scaleX(1); } }
                .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
            `}</style>
        </div>
    );
};

export default BottomNavBar;
