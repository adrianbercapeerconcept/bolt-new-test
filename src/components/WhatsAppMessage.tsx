import React from 'react';
import { MessageSquare } from 'lucide-react';

interface WhatsAppMessageProps {
  phoneNumber: string;
  message?: string;
  className?: string;
}

export function WhatsAppMessage({ phoneNumber, message = '', className = '' }: WhatsAppMessageProps) {
  const handleWhatsAppClick = () => {
    // Remove any non-numeric characters from phone number
    const cleanPhone = phoneNumber.replace(/\D/g, '');
    // Create WhatsApp URL with encoded message
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`inline-flex items-center px-4 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#128C7E] transition-colors ${className}`}
    >
      <MessageSquare className="w-5 h-5 mr-2" />
      WhatsApp
    </button>
  );
}