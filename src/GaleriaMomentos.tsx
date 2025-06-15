import React, { useState, useRef, useEffect } from "react";

const restauranteFotos = [
  'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=800', // prato de salada
  'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=800',   // hambúrguer
  'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800', // pizza
  'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=800', // prato de salada
  'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=800', // prato de salada
  'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=800',   // hambúrguer
  'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800', // pizza
  'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=800', // prato de salada
];

const base = import.meta.env.BASE_URL;

const pescaFotos = [
  `${base}imagens/pesca1.jpg`,
  `${base}imagens/pesca2.jpg`,
  `${base}imagens/pesca3.jpg`,
  `${base}imagens/pesca4.jpg`,
  `${base}imagens/pesca5.jpg`,
  `${base}imagens/pesca6.jpg`,
  `${base}imagens/pesca7.jpg`,
  `${base}imagens/pesca8.jpg`,
];

function getObjectPositionClass(foto: string, categoria: string) {
  if (categoria !== 'pesca') return 'object-[center_40%]';
  switch (foto) {
    case `${base}imagens/pesca2.jpg`:
      return 'object-[center_60%]';
    case `${base}imagens/pesca3.jpg`:
      return 'object-[center_50%]';
    case `${base}imagens/pesca4.jpg`:
      return 'object-[center_15%]';
    case `${base}imagens/pesca5.jpg`:
      return 'object-[center_11%]';
    case `${base}imagens/pesca6.jpg`:
      return 'object-[center_10%]';
    case `${base}imagens/pesca8.jpg`:
      return 'object-[center_35%]';
    case `${base}imagens/pesca7.jpg`:
      return 'object-[center_30%]';
    default:
      return 'object-[center_40%]';
  }
}

export default function GaleriaMomentos() {
  const [categoria, setCategoria] = useState<'restaurante' | 'pesca'>('restaurante');
  const [fotoSelecionada, setFotoSelecionada] = useState<string | null>(null); // NOVO
  const fotos = categoria === 'restaurante' ? restauranteFotos : pescaFotos;

  // Refs para os botões
  const restauranteRef = useRef<HTMLButtonElement>(null);
  const pescaRef = useRef<HTMLButtonElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const activeRef = categoria === 'restaurante' ? restauranteRef : pescaRef;
    const underline = underlineRef.current;
    if (activeRef.current && underline) {
      const rect = activeRef.current.getBoundingClientRect();
      const parentRect = activeRef.current.parentElement!.getBoundingClientRect();
      underline.style.width = `${rect.width}px`;
      underline.style.left = `${rect.left - parentRect.left}px`;
    }
  }, [categoria]);

  return (
    <div>
      <div className="flex justify-center mt-6 mb-8 relative">
        <div className="flex gap-8 relative" style={{ position: 'relative' }}>
          {/* Underline animado */}
          <div
            ref={underlineRef}
            className="absolute bottom-0 h-1 bg-green-500 rounded transition-all duration-300"
            style={{ left: 0, width: 0, zIndex: 0 }}
          />
          <button
            ref={restauranteRef}
            className={`relative px-2 py-1 font-semibold text-lg bg-transparent border-none outline-none transition-colors duration-300 z-10
              ${categoria === 'restaurante' ? 'text-green-600' : 'text-gray-500 hover:text-green-600'}
            `}
            onClick={() => setCategoria('restaurante')}
          >
            Restaurante
          </button>
          <button
            ref={pescaRef}
            className={`relative px-2 py-1 font-semibold text-lg bg-transparent border-none outline-none transition-colors duration-300 z-10
              ${categoria === 'pesca' ? 'text-green-600' : 'text-gray-500 hover:text-green-600'}
            `}
            onClick={() => setCategoria('pesca')}
          >
            Pescaria
          </button>
        </div>
      </div>
<div className="grid grid-cols-4 gap-4">
        {fotos.map((foto, idx) => (
          <div key={idx} className="flip-card group cursor-pointer" onClick={() => setFotoSelecionada(foto)}>
            <div className={`flip-card-inner ${categoria === 'pesca' ? 'flipped' : ''}`}>
              <div className="relative overflow-hidden rounded">
                <img
                  src={foto}
                  alt={`Momento ${idx + 1}`}
                  className={`w-full h-56 object-cover rounded transition-transform duration-300 group-hover:scale-110 ${getObjectPositionClass(foto, categoria)}`}
                />
                <div className="absolute inset-0 bg-gray-700 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white bg-opacity-80 shadow-lg">
                      {/* Ícone de câmera */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <rect x="4" y="7" width="16" height="12" rx="3" stroke="currentColor" strokeWidth="2" />
                        <circle cx="12" cy="13" r="3" stroke="currentColor" strokeWidth="2" />
                        <circle cx="17" cy="10" r="1" fill="currentColor" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Modal */}
      {fotoSelecionada && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={() => setFotoSelecionada(null)}
        >
          <div
            className="relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100 transition"
              onClick={() => setFotoSelecionada(null)}
              aria-label="Fechar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2"/>
                <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
            <img
              src={fotoSelecionada}
              alt="Foto ampliada"
              className="max-w-[90vw] max-h-[80vh] rounded shadow-2xl"
            />
          </div>
        </div>
      )}

      <style>{`
        .flip-card { perspective: 1000px; }
        .flip-card-inner { transition: transform 0.6s; }
        .flipped { transform: rotateY(180deg); }
      `}</style>
    </div>
  );
}
      <style>{`
        .flip-card { perspective: 1000px; }
        .flip-card-inner { transition: transform 0.6s; }
        .flipped { transform: rotateY(180deg); }
      `}</style>
