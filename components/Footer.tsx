
import React from 'react';
import type { View } from './types';

const InstagramIcon = () => (
    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919A118.663 118.663 0 0112 2.163zm0 1.442c-3.143 0-3.509.011-4.72.067-2.694.123-3.997 1.433-4.12 4.12C3.109 9.12 3.098 9.486 3.098 9.486 3.098 12c0 2.514.011 2.88.067 4.72.123 2.686 1.427 3.996 4.12 4.12 1.21.055 1.577.067 4.72.067 3.143 0 3.509-.011 4.72-.067 2.694-.123 3.997-1.433 4.12-4.12.056-1.84.067-2.206.067-4.72 0-2.514-.011-2.88-.067-4.72-.123-2.686-1.427-3.996-4.12-4.12-1.21-.055-1.577.067-4.72-.067zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm0 1.44a2.31 2.31 0 110 4.62 2.31 2.31 0 010-4.62zM18.88 6.54a1.32 1.32 0 100-2.64 1.32 1.32 0 000 2.64z" clipRule="evenodd" />
    </svg>
);

const FacebookIcon = () => (
    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
);

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.919 6.066l-1.475 5.422 5.571-1.469z" />
    </svg>
);

interface FooterProps {
    onNavigate: (view: View, payload?: any) => void;
}

const FooterLink: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ onClick, children }) => (
    <li>
        <button 
            onClick={onClick}
            className="text-gray-400 hover:text-white transition-colors uppercase text-[10px] font-bold tracking-widest"
        >
            {children}
        </button>
    </li>
);

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    return (
        <footer className="bg-black border-t border-gray-800 text-white font-sans py-24">
            <div className="container mx-auto px-6 flex flex-col items-center">
                {/* Logo Section: Con fondo blanco transparente muy suave para que el logo luzca original */}
                <div className="mb-16 text-center">
                    <button 
                        onClick={() => onNavigate('home')}
                        className="inline-block hover:opacity-90 transition-opacity mb-8 p-6 bg-white/10 rounded-2xl backdrop-blur-sm"
                    >
                        <img 
                            src="https://vellaperfumeria.com/wp-content/uploads/2024/06/vellaperfumeralogo.png" 
                            alt="Vellaperfumeria Logo" 
                            className="h-24 md:h-32 w-auto mx-auto" 
                        />
                    </button>
                    <h2 className="text-3xl font-black uppercase tracking-[0.5em] text-white">Vellaperfumeria</h2>
                    <p className="text-gray-500 text-xs mt-6 uppercase tracking-[0.3em] max-w-sm mx-auto leading-loose opacity-80">
                        Tu tienda oficial de belleza 2026.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-20 w-full max-w-5xl text-center border-t border-gray-900 pt-20">
                    <div>
                        <h3 className="text-[12px] font-black tracking-[0.3em] uppercase mb-10 text-rose-400">Navegación</h3>
                        <ul className="space-y-6">
                           <FooterLink onClick={() => onNavigate('home')}>Inicio</FooterLink>
                           <FooterLink onClick={() => onNavigate('products', 'all')}>Tienda Online</FooterLink>
                           <FooterLink onClick={() => onNavigate('ofertas')}>Mejores Ofertas</FooterLink>
                        </ul>
                    </div>

                     <div>
                        <h3 className="text-[12px] font-black tracking-[0.3em] uppercase mb-10 text-rose-400">Ayuda</h3>
                        <ul className="space-y-6">
                            <FooterLink onClick={() => onNavigate('about')}>Sobre Nosotros</FooterLink>
                            <li className="text-gray-500 uppercase text-[10px] font-bold tracking-[0.2em] cursor-default">Privacidad</li>
                            <li className="text-gray-500 uppercase text-[10px] font-bold tracking-[0.2em] cursor-default">Envíos</li>
                        </ul>
                    </div>

                     <div>
                        <h3 className="text-[12px] font-black tracking-[0.3em] uppercase mb-10 text-rose-400">Síguenos</h3>
                        <div className="flex justify-center space-x-10 text-white mb-8">
                           <span className="cursor-pointer hover:text-rose-400 transition-all duration-300 transform hover:scale-125"><InstagramIcon /></span>
                           <span className="cursor-pointer hover:text-rose-400 transition-all duration-300 transform hover:scale-125"><FacebookIcon /></span>
                           <a href="https://api.whatsapp.com/send?phone=34661202616" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-green-400 transition-all duration-300 transform hover:scale-125"><WhatsAppIcon /></a>
                        </div>
                    </div>
                </div>

                <div className="mt-24 pt-12 border-t border-gray-900 w-full text-center">
                    <p className="text-[10px] text-gray-700 uppercase tracking-[0.4em] font-bold">
                        &copy; {new Date().getFullYear()} Vellaperfumeria.com | Catálogo Oficial 2026.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
