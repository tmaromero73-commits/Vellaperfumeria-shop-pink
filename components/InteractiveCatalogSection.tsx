
import React from 'react';
import type { View } from './types';

interface InteractiveCatalogSectionProps {
    onNavigate: (view: View) => void;
}

const InteractiveCatalogSection: React.FC<InteractiveCatalogSectionProps> = ({ onNavigate }) => {
    const catalogCoverUrl = 'https://cdn.ipaper.io/iPaper/Papers/0ae94f9f-dbf1-41ce-8890-85ef3c56310d/Pages/1/Zoom.jpg';

    return (
        <section>
            <div className="text-center mb-10">
                <h2 className="text-3xl font-extrabold text-black tracking-tight">Catálogo Digital 2026</h2>
                <p className="mt-2 text-lg text-gray-600">Descubre antes que nadie las novedades y ofertas de la nueva temporada.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-center">
                <div 
                    onClick={() => onNavigate('catalog')}
                    className="relative aspect-[1.5/1] md:aspect-[4/3] bg-gray-100 rounded-lg shadow-lg overflow-hidden border w-full max-w-xl mx-auto group cursor-pointer transform hover:-translate-y-2 transition-transform duration-300"
                    role="button"
                    aria-label="Ver catálogo 2026"
                >
                    <img
                        src={catalogCoverUrl}
                        alt="Portada del Catálogo Oficial 2026"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <div className="text-white text-lg font-bold bg-black/50 px-6 py-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110">
                            Abrir Catálogo 2026
                        </div>
                    </div>
                </div>

                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Novedades Nueva Temporada</h3>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto md:mx-0">
                        Explora nuestro catálogo digital interactivo de 2026. Hojea las páginas virtuales, descubre productos exclusivos y compra directamente con un clic.
                    </p>
                    <button
                        onClick={() => onNavigate('catalog')}
                        className="inline-block bg-black text-white font-bold py-3 px-8 rounded-md shadow-md hover:bg-fuchsia-600 transition-colors"
                    >
                        Explorar Catálogo 2026
                    </button>
                </div>
            </div>
        </section>
    );
};

export default InteractiveCatalogSection;
