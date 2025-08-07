import React, { useState, useEffect } from 'react';
import { MessageCircle, Calendar, X } from 'lucide-react';
import { getWhatsAppUrl, contactConfig } from '../config/contact';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Mostrar o botão após 3 segundos
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Mostrar tooltip por 5 segundos
      setTimeout(() => {
        setShowTooltip(true);
        setTimeout(() => {
          setShowTooltip(false);
        }, 5000);
      }, 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const whatsappUrl = getWhatsAppUrl();
    window.open(whatsappUrl, '_blank');
  };

  const handleCalendarClick = () => {
    window.open(contactConfig.doctoralia.url, '_blank');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Tooltip */}
      {showTooltip && (
        <div className="fixed bottom-40 right-6 z-50 bg-white rounded-lg shadow-lg p-4 max-w-xs animate-bounce">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900 mb-1">
                💬 Precisa de ajuda?
              </p>
              <p className="text-xs text-gray-600">
                Clique aqui para falar comigo no WhatsApp!
              </p>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="ml-2 text-gray-400 hover:text-gray-600"
            >
              <X size={14} />
            </button>
          </div>
          {/* Seta do tooltip */}
          <div className="absolute bottom-0 right-6 transform translate-y-full">
            <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
          </div>
        </div>
      )}

      {/* Botão Doctoralia */}
      <button
        onClick={handleCalendarClick}
        className="fixed bottom-28 right-6 z-40 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
        aria-label="Agendar consulta no Doctoralia"
        title="Agendar consulta"
      >
        <Calendar size={24} />
      </button>

      {/* Botão WhatsApp */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 animate-pulse"
        aria-label="Falar no WhatsApp"
        title="Falar no WhatsApp"
      >
        <MessageCircle size={24} />
      </button>
    </>
  );
};

export default WhatsAppFloat;

